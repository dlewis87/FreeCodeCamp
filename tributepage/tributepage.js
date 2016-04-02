$(document).ready(function() {

  var timeline = [
    'Ada Lovelace was born 10 December 1815 as the only legitimate child of the poet George Gordon, Lord Byron and his wife Anne Isabella Milbanke, Baroness Wentworth',
    'Father, Lord Byron dies when she was 8 years old',
    'Ada\'s mother remained bitter towards Lord Byron and promoted Ada\'s interest in mathematics and logic',
    'In June 1829, she was paralysed after a bout of measles.',
    'By 1831 she was able to walk with crutches. Despite being ill Ada developed her mathematical and technological skills',
    'In early 1833 Ada had an affair with a tutor and, after being caught, tried to elope with him. The tutor\'s relatives recognised her and contacted her mother. Annabella and her friends covered the incident up to prevent a public scandal.',
    'As a teenager, her mathematical talents led her to an ongoing working relationship and friendship with fellow British mathematician Charles Babbage',
    'By 1834 Ada was a regular at Court and started attending various events.She danced often and was able to charm many people, and was described by most people as being dainty',
    'On 8 July 1835 she married William, 8 th Baron King, becoming Lady King.Their residence was Ockham Park, a large estate in Surrey, along with another estate on Loch Torridon in Ross - shire, and a home in London.',
    'They had three children: Byron(born 12 May 1836);Anne Isabella(called Annabella; born 22 September 1837);and Ralph Gordon(born 2 July 1839).Immediately after the birth of Annabella, Lady King experienced "a tedious and suffering illness, which took months to cure."',
    'Between 1842 and 1843, she translated an article by Italian military engineer Luigi Menabrea on the engine, which she supplemented with an elaborate set of notes, simply called Notes.These notes contain what many consider to be the first computer program— that is, an algorithm designed to be carried out by a machine.',
    'In 1953, more than a century after her death, Lovelace\'s notes on Babbage\'s Analytical Engine were republished.The engine has now been recognised as an early model for a computer and her notes as a description of a computer and software.',
    'In her notes, Lovelace emphasised the difference between the Analytical Engine and previous calculating machines, particularly its ability to be programmed to solve problems of any complexity.She realised the potential of the device extended far beyond mere number crunching.'
  ];

  timeline.map(function(event) {
    $('#events').append('<li>' + event + '</li>');
  })

 

})
