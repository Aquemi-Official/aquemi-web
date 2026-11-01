"""Threaded static server for aquemi-web with a deep backlog: python serve.py <port>"""
import http.server, socketserver, sys, os, functools
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'aquemi-web'))
class S(http.server.ThreadingHTTPServer): request_queue_size = 128; daemon_threads = True
class H(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
S(('127.0.0.1', int(sys.argv[1])), H).serve_forever()
