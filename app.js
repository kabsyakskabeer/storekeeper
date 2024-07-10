self.addEventListener
(
    'fetch',(event)=>
    {
        if
        (
         event
         .request
         .method === 'POST'
         && event.request.body
       
        )
        {
         const formData = 
         event.request.body;


         event.respondWith
         (
            new Response
            (
                'kabeer'
            )
         )


        }  
    }
);
