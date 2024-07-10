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
         console.log('happy man');


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
