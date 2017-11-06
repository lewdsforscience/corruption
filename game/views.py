from pyramid.view import view_config
from pyramid.response import Response
from pyramid.renderers import render_to_response
from pyramid.httpexceptions import HTTPFound

@view_config(route_name='root')
def my_view(request):
    return render_to_response('templates/game.jinja2',dict(),request=request)
