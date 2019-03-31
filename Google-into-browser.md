# What happens when "google.com" is typed into the browser address bar and you press enter??

## 1. URL or a search term?
... When no domain name is given, the browser feeds the text into its detault search engine.

## 2. DNS Lookup
...The browser will check if the domain is in its cache.  If not, the browser will call `gethostbyname` library function to do the lookup..
...And if that does not work, a request to the DNS server will be made. (This typically wil be the local router or the ISP's caching DNS server)..

## 3. Opening of a socket
...The browser will then recieve an IP address of the destination server.  It takes that and a given port number from the URL (the HTTP protocol detaults to port 80, HTTPS to port 443) and makes a call to the system library function called `socket`..
...Once this is done, a packet is ready to be transmitted through either: 
* Ethernet
* WiFi
* Cellular data network

## 4. Finding the correct server
...With the IP address, the request package travels from the local area network (LAN) to the wide area network (WAN) and back down to a LAN of the destination server.
...When the destination server recieves the request, it will send back the HTML file to your pc.  These files may be large and sent in many pieces.

## Notes

### IP Address
...A typical IP address looks like this: 25.36.29.168  
* it is 32 bits, each number seperated by a period is 8 bits
* each 8 bit has a range of 0-255
