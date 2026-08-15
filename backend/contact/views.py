import os
import json

import resend

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import ContactMessage


@csrf_exempt
def contact_message(request):

    # -------------------------
    # ONLY POST ALLOWED
    # -------------------------

    if request.method != "POST":
        return JsonResponse(
            {
                "success": False,
                "message": "Only POST requests are allowed."
            },
            status=405
        )

    # -------------------------
    # READ JSON
    # -------------------------

    try:
        data = json.loads(request.body)

    except json.JSONDecodeError:
        return JsonResponse(
            {
                "success": False,
                "message": "Invalid request data."
            },
            status=400
        )

    # -------------------------
    # GET FORM DATA
    # -------------------------

    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    message = data.get("message", "").strip()

    # -------------------------
    # VALIDATION
    # -------------------------

    if not name:
        return JsonResponse(
            {
                "success": False,
                "message": "Name is required."
            },
            status=400
        )

    if not email:
        return JsonResponse(
            {
                "success": False,
                "message": "Email is required."
            },
            status=400
        )

    if not message:
        return JsonResponse(
            {
                "success": False,
                "message": "Message is required."
            },
            status=400
        )

    # -------------------------
    # SAVE MESSAGE TO DATABASE
    # -------------------------

    try:
        contact = ContactMessage.objects.create(
            name=name,
            email=email,
            message=message
        )

    except Exception as e:
        print("DATABASE ERROR:", repr(e))

        return JsonResponse(
            {
                "success": False,
                "message": "Database error. Check Render logs."
            },
            status=500
        )

    # -------------------------
    # SEND EMAIL USING RESEND
    # -------------------------

    try:
        resend_api_key = os.getenv("RESEND_API_KEY")
        recipient_email = os.getenv("EMAIL_HOST_USER")

        if not resend_api_key:
            raise ValueError("RESEND_API_KEY is not configured.")

        if not recipient_email:
            raise ValueError("EMAIL_HOST_USER is not configured.")

        resend.api_key = resend_api_key

        params = {
            "from": "Portfolio <onboarding@resend.dev>",
            "to": [recipient_email],
            "subject": f"New Portfolio Contact: {name}",
            "html": f"""
                <h2>New Portfolio Contact</h2>

                <p>
                    <strong>Name:</strong> {name}
                </p>

                <p>
                    <strong>Email:</strong> {email}
                </p>

                <p>
                    <strong>Message:</strong>
                </p>

                <p>
                    {message}
                </p>
            """,
        }

        resend.Emails.send(params)

    except Exception as e:
        print("EMAIL ERROR:", repr(e))

        return JsonResponse(
            {
                "success": False,
                "message": "Message saved, but email could not be sent."
            },
            status=500
        )

    # -------------------------
    # SUCCESS
    # -------------------------

    return JsonResponse(
        {
            "success": True,
            "message": "Your message has been received!",
            "id": contact.id
        },
        status=201
    )