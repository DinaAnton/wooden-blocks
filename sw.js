const V='wooden-blocks-v1';
const FILES=['./','index.html','manifest.webmanifest','favicon.ico','icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','icons/apple-touch-icon.png','icons/favicon-32.png','icons/favicon-16.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request).then(hit=>{
    const net=fetch(e.request).then(r=>{
      if(r.ok&&new URL(e.request.url).origin===location.origin){const c=r.clone();caches.open(V).then(x=>x.put(e.request,c));}
      return r;
    }).catch(()=>hit||caches.match('index.html'));
    return hit||net;
  }));
});
