import { Component, Input } from '@angular/core';
interface AmazonReviews{
    ratings: number;
    name:string;
    title: string;
    date: string;
    review: string;
    }
@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent {

reviews: AmazonReviews[] =[
    {ratings: 5, name: 'nicole williams', title:'Palate pleasing-soul-touching sauce', date: 'March 12, 2019',review:'As soon as I opened Up South BBQ Sauce, I did the finger taste test. That first taste touched my soul. The sweet, the tangy and just enough vinegar to equate tart was enough for me to pour it on bread and make a sandwich. (Yes, a BBQ sauce sandwich.) It\'s good enough to eat by itself, on bread and meat. I know it\'s BBQ sauce but I will have to buy another bottle because I want to marinate pork in it. It\'s a winner!!!!'},
    {ratings: 5, name: 'Chris Miller', title: 'On my 6th bottle', date: 'April 26, 2019', review: 'My family and I love this sauce. We lightly brushed our latest smoked burgers and the kids went crazy. So goo on so many things. Great job and I\'m getting ready to buy more. Have to buy more because my friends keep taking mine. ~C-Miller'},
    {ratings: 5, name: 'Doniel Calvin', title: 'Buy it NOW if you love sauce!', date: 'April 10, 2019', review: 'I am a LOVER of bar-b-que sauce which means I’m also very critical. This sauce is AMAZING! It’s pretty much perfect as it gives you just the right amount of heat and sweet.'},
    {ratings: 5, name: 'Amazon Customer', title: 'Best sauce in Michigan', date: 'March 15, 2019', review: 'This bbq sauce is really delicious! It has the perfect blend of sweet and smoky flavor. Doesn’t overpower fish or chicken but flavorful enough for pulled pork, ribs and brisket! Ready to reorder!'},
    {ratings: 5, name: 'Andrea Supina', title: 'Winner at our house!!', date: 'April 13, 2019', review: 'So glad I gave this new sauce a try!!! Was getting bored with some of the usuals, this is just what I was looking for, very versatile sauce'},
    {ratings: 5, name: 'Racquel S.', title:'Best Sweet BBQ Sauce', date: 'February 24, 2019', review:'This is my favorite, sweet bbq sauce. Period. It’s addictive...no lie. I will definitely be keeping it on hand.'},
    {ratings: 5, name: 'Amazon Customer', title: 'Up South BBQ - Just a Good Sauce', date: 'March 17, 2019', review: 'Not a thick sauce but very flavorful and tasty sauce. I will be purchasing it again.'},
    {ratings: 5, name: 'Stephanie', title: 'Best BBQ hands down!',date: 'March 4, 2019', review: 'Finger licking good..even my toddler enjoys it. On my 3rd bottle already so its a win! Just the perfect blend of sweetness and spices! You won\'t be disappointed!'},
    {ratings: 5, name: 'CJ81', title: 'Phenomenal!!!!', date: 'February 20, 2019',review: 'This is the best BBQ sauce I’ve ever had. It’s a little sweet and smokey with a kick. This sauce has definitely taken my cookouts up a few notches. Up South BBQ Sauce is now a pantry staple in my home!'},
    {ratings: 5, name: 'Amazon Customer', title: 'BEST versatile BBQ sauce around!', date: 'February 19, 2019', review: 'Can\'t go wrong saucing all your favorite with this! BEST blend of sweet and tangy to make all your dishes POP! Great customer service and definitely on our re-order list!'},
]
// star: number=0;
showPepper=(ratings)=>{
    const list = [];
    for (let i =0; i < ratings; i++){
        list.push('pepper');
    }
    return list;
}
random=()=>{
   const arrayCopy = [...this.reviews];
   const result = [];
   result.push(...arrayCopy.splice(Math.floor(Math.random() * arrayCopy.length), 1));
   result.push(...arrayCopy.splice(Math.floor(Math.random() * arrayCopy.length), 1));
   result.push(...arrayCopy.splice(Math.floor(Math.random() * arrayCopy.length), 1));
   result.push(...arrayCopy.splice(Math.floor(Math.random() * arrayCopy.length), 1));
   result.push(...arrayCopy.splice(Math.floor(Math.random() * arrayCopy.length), 1));
   result.push(...arrayCopy.splice(Math.floor(Math.random() * arrayCopy.length), 1));
   return result;
}
}