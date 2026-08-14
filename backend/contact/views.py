import os
import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail

from .models import ContactMessage


@csrf_exempt
def contact_message(request):

    # Only allow POST requests
    if request.method != "POST":
        return JsonResponse(
            {
                "success": False,
                "message": "Only POST requests are allowed."
            },
            status=405
        )

    # Read JSON data
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

    # Validate name
    if not name:
        return JsonResponse(
            {
                "success": False,
                "message": "Name is required."
            },
            status=400
        )

    # Validate email
    if not email:
        return JsonResponse(
            {
                "success": False,
                "message": "Email is required."
            },
            status=400
        )

    # Validate message
    if not message:
        return JsonResponse(
            {
                "success": False,
                "message": "Message is required."
            },
            status=400
        )

    # Save message to database
    contact = ContactMessage.objects.create(
        name=name,
        email=email,
        message=message
    )

    # Send email
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

        # Print exact email error in Render logs
        print("EMAIL ERROR:", repr(e))

        return JsonResponse(
            {
                "success": False,
                "message": "Email sending failed.",
                "error": str(e)
            },
            status=500
        )

    # Successful response
    return JsonResponse(
        {
            "success": True,
            "message": "Your message has been received!",
            "id": contact.id
        },
        status=201
    )