from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail

import json

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

    # Validate required fields
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
    

    # Save message
    contact = ContactMessage.objects.create(
        name=name,
        email=email,
        message=message
    )
    send_mail(
        subject=f"New Portfolio Contact: {name}",
        message=f"""
    You received a new message from your portfolio.

    Name: {name}
    Email: {email}

    Message:
    {message}
    """,
        from_email="portfolio@example.com",
        recipient_list=["ishakumari3711@gmail.com"],
    )

    return JsonResponse(
        {
            "success": True,
            "message": "Your message has been received!",
            "id": contact.id
        },
        status=201
    )