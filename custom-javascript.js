var featuredPost1 = new Post("Aquarium Water Conditioner", "https://petrener.com/best-aquarium-water-conditioner/",
    "https://petrener.com/wp-content/uploads/2022/12/Tetra-AquaSafe-Plus-Aquarium-Water-Conditioner_low.png");

alert(featuredPost1.postName());

class Post{
    constructor(postName, postLink, postImg){
        this.postName = postName;
        this.postLink = postLink;
        this.postImg = postImg;
    }
    get postName(){
        return this.postName;
    }
    get postLink(){
        return this.postLink;
    }
    get postImg(){
        return this.postImg;
    }
}