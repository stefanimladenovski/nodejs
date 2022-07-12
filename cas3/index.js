const { convertText, textStats } = require('./convert_text.js');

 let original = 'stefani e najdobra studentka!';
 let converted = convertText('lattocyr', original);

console.log(original);
console.log(converted);

/*
let original = ' стефани нема појма од ноде јс :(';
let conv = convertText('cyrtolat', original);

console.log(original);
console.log(conv);  */


const randomText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a lectus at sapien fringilla interdum sed id lorem. In nec interdum leo, non imperdiet nulla. Sed elementum est vitae sem vulputate, non ornare est facilisis. Mauris eget leo at lectus aliquet elementum sit amet a ligula. Integer quis metus vel odio dictum suscipit a vel mauris. Ut nec nibh a turpis mattis ultrices. Etiam venenatis est id ante pulvinar vulputate. Vivamus elementum ullamcorper consectetur. Donec tempus tortor non justo maximus, interdum imperdiet enim viverra. Donec ultricies commodo efficitur. Sed vel augue dolor. Proin aliquam eros eget ligula cursus tempus. Proin efficitur sem quis ipsum placerat consectetur. Praesent malesuada est sed massa ornare consequat. Nulla massa ligula, finibus ac erat vitae, posuere blandit leo. Suspendisse dignissim egestas dignissim.';

let stats = textStats(randomText);
console.log(stats);