var breedImage = $("#breed-image");
var dropdown = $("#dog-breeds");

$.get("https://dog.ceo/api/breeds/list/all", function (data, status) {
    let dogBreeds = data.message;
    
    for (let breed in dogBreeds) {
      
          dropdown.append('<option value="' + breed + '">' + breed + '</option>');
    }

});

$("form button").click(function (e) {
  
       e.preventDefault();

    let breed = dropdown.val();

    let url = "https://dog.ceo/api/breed/" + breed;
    url += "/images";

    $("#breed-image img").remove();
    
       $.get(url, function (data) {
        let imagesUrl = data.message;

        for (let i=0;i<10;i++) {
             if(imagesUrl[i]==null) {
                
                 break;
            }
             breedImage.append('<img class="size" src="' + imagesUrl[i] + '" alt="' + breed + '">');
        }
    });

});
