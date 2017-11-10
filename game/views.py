from pyramid.view import view_config


@view_config(route_name='home', renderer='templates/mytemplate.jinja2')
def my_view(request):
    return {'project': 'game'}

@view_config(route_name='post', renderer='json')
def post_view(request):
    if request.POST['thing'] == 0:
        return {'thing':2}
