"""
WSGI config for efitterbackend project.
"""
import os
import sys
from pathlib import Path

# Make sure the project root (the folder containing this 'efitterbackend'
# package) is importable, regardless of Vercel's working directory.
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'efitterbackend.settings')

application = get_wsgi_application()