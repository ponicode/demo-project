import urllib

def get_request(url):
    r = urllib.urlopen(url)
    data = r.read()
    r.close()
    return d