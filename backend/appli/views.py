from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .models import Etudiant, Prof
from .serializers import EtudiantSerializer, ProfSerializer

User = get_user_model()

# API de Connexion (Remplace votre login_view)
@api_view(['POST'])
def api_login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    # Votre logique existante : on cherche par email
    user = User.objects.filter(email=email).first()
    
    if user and user.check_password(password):
        # Connexion réussie
        return Response({
            "status": "success",
            "message": "Connexion réussie",
            "username": user.username or "Admin"
        })
    else:
        return Response({
            "status": "error", 
            "message": "Email ou mot de passe incorrect"
        }, status=400)

# API Dashboard (Remplace votre dashboard_view)
@api_view(['GET'])
def api_dashboard(request):
    etudiants = Etudiant.objects.all()
    profs = Prof.objects.all()
    
    # On prépare les données JSON
    data = {
        'etudiants': EtudiantSerializer(etudiants, many=True).data,
        'profs': ProfSerializer(profs, many=True).data,
        'total_etudiants': etudiants.count(),
        'total_profs': profs.count(),
        'total': etudiants.count() + profs.count(),
    }
    return Response(data)