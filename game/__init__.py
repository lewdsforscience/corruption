from pyramid.config import Configurator
from pyramid.session import SignedCookieSessionFactory

def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    config = Configurator(settings=settings)
    config.set_session_factory(SignedCookieSessionFactory('something'))
    config.include('pyramid_jinja2')
    config.add_static_view('static', 'static', cache_max_age=0)
    config.add_route('root', '/')
    config.scan()
    return config.make_wsgi_app()
