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

         const d_name = 
         formData
         .get('d_name');

         const d_unit =
         formData
         .get('d_unit');

         const d_price =
         formData
         .get('d_price');

         event.respondWith
         ('form Data received')


        }  
    }
);
