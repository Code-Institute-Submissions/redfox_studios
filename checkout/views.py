from django.shortcuts import render, redirect, reverse
from django.contrib import messages

from .forms import OrderForm


def checkout(request):
    bag = request.session.get('bag', {})
    if not bag:
        messages.error(request, "There's nothing in your bag at the moment")
        return redirect(reverse('products'))

    order_form = OrderForm()
    template = 'checkout/checkout.html'
    context = {
        'order_form': order_form,
        'stripe_public_key': 'pk_test_51I59WiH9m6eY31DTN6C8URaUDTQhEq3dfKvSjS4bw7KhUxgYj9jcpdUUxhqqE6nsQPvPQafvphpKAfYtj0vfoRUC00y96uGqO5',
        'client_secret': 'test client secret',
    }

    return render(request, template, context)
