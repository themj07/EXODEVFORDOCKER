from django.shortcuts import render, redirect
from django.contrib.auth import get_user_model, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Etudiant, Prof

User = get_user_model()

def login_view(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = User.objects.filter(email=email).first()
        if user and user.check_password(password):
            login(request, user)
            return redirect('dashboard')
        else:
            messages.error(request, 'Email ou mot de passe incorrect')
            print("Échec de la connexion pour l'email :", email)
    return render(request, 'login.html')

@login_required
def logout_view(request):
    logout(request)
    return redirect('login')

@login_required
def dashboard_view(request):
    etudiants = Etudiant.objects.all()
    profs = Prof.objects.all()
    context = {
        'etudiants': etudiants,
        'profs': profs,
        'total_etudiants': etudiants.count(),
        'total_profs': profs.count(),
        'total': etudiants.count() + profs.count(),
    }
    return render(request, 'dashboard.html', context)
