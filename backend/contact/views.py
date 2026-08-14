import os
import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail

from .models import ContactMessage


@csrf_exempt
def contact_message(request):

    # Only POST allowed
    if request.method != "POST":
        return JsonResponse(
            {
                "success": False,
                "message": "Only POST requests are allowed."
            },
            status=405
        )

    # Read JSON
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

    # Get form data
    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    message = data.get("message", "").strip()

    # Validation
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
    # SEND EMAIL
    # -------------------------

    try:
        send_mail(
            subject=f"New Portfolio Contact: {name}",

            message=f"""
You received a new message from your portfolio.

Name: {name}
Email: {email}

Message:
{message}
""",

            from_email=os.getenv("EMAIL_HOST_USER"),

            recipient_list=[
                os.getenv("EMAIL_HOST_USER")
            ],

            fail_silently=False,
        )

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