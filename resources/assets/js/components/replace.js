$(document).ready(function () {

    $('a[href="#portfolio__liquidweb"]').click(function(){
        $('#iframe').attr('src','https://www.youtube.com/embed/f3iV_svaObE');
        sessionStorage.setItem('iframeSrc', 'https://www.youtube.com/embed/f3iV_svaObE');
        sessionStorage.setItem('blurbText', 'You were fired from LIQUID WEB INC on November 04, 2015 under the employer\'s "At-Will" policy. The employer failed to provide information regarding your separation.');
        $('.blurb__text').html(sessionStorage.getItem('blurbText'));
    });
    $('a[href="#portfolio__halfass"]').click(function(){
        $('#iframe').attr('src',"https://www.youtube.com/embed/xIYkADyuZng");
        sessionStorage.setItem('iframeSrc', "https://www.youtube.com/embed/xIYkADyuZng");
        sessionStorage.setItem('blurbText', 'Turns out, it’s hard to sell yourself as a professional with a title like that. I liked it though. It was meant to be a tongue in cheek commentary on the fact that we all use google to some extent. I wanted to cater to the “Google Administrator”.');
        $('.blurb__text').html(sessionStorage.getItem('blurbText'));
    });
    $('a[href="#portfolio__keyborg"]').click(function(){
        $('#iframe').attr('src','https://www.youtube.com/embed/8pXIdRY2i5Y');
        sessionStorage.setItem('iframeSrc', 'https://www.youtube.com/embed/8pXIdRY2i5Y');
        sessionStorage.setItem('blurbText', 'Now I know what you’re thinking. Good luck fighting Microsoft on this patent. That’s the thing though, patent court is pretty level. It was at least, and probably still is. What do I mean by this? So since 1999 upto 2012 patents have been subject to a process called Inter Partes Reexamination. That process had cumulatively narrowed or canceled some 88% of patents ');
        $('.blurb__text').html(sessionStorage.getItem('blurbText'))
    });
    $('a[href="#portfolio__leadtracker"]').click(function(){
        $('#iframe').attr('src','https://www.youtube.com/embed/m4xvufSdO9Y');
        sessionStorage.setItem('iframeSrc', 'https://www.youtube.com/embed/m4xvufSdO9Y');
        sessionStorage.setItem('blurbText', 'I needed a way to dynamically track any number of companies over any number of social media platforms, and generate possible leads based on unhappy customers. An aggressive customer acquisition strategy will also help lay the foundations of binary oasis. I also needed a project to drown in and this was a great one for it. ');
        $('.blurb__text').html(sessionStorage.getItem('blurbText'))
    });
    $('a[href="#portfolio__hireryan"]').click(function(){
        $('#iframe').attr('src','https://www.youtube.com/embed/fPpHa3rNve8');
        sessionStorage.setItem('iframeSrc', 'https://www.youtube.com/embed/fPpHa3rNve8');
        sessionStorage.setItem('blurbText', 'The site has some very custom assets that don’t easily prescribe to traditional naming conventions. What I can say is this, I have a very explicit naming convention and you’d never be lost trying to understand an element and its children.');
        $('.blurb__text').html(sessionStorage.getItem('blurbText'))
    });
    $('a[href="#portfolio__gns3"]').click(function(){
        $('#iframe').attr('src','https://www.youtube.com/embed/TDvHrLEE3cU');
        sessionStorage.setItem('iframeSrc', 'https://www.youtube.com/embed/TDvHrLEE3cU');
        sessionStorage.setItem('blurbText', 'GNS3 is a Cisco device emulator. It uses real IOS images and you can build a network from them and even integrate external systems and devices. Albeit with severely decreased performance, but that\'s to be expected. There’s built in labs and exercises that could either surpass or supplement traditional materials.');
        $('.blurb__text').html(sessionStorage.getItem('blurbText'))
    });
    $('a[href="#portfolio__docker"]').click(function(){
        $('#iframe').attr('src','https://www.youtube.com/embed/7erBUs97qVE');
        sessionStorage.setItem('iframeSrc', 'https://www.youtube.com/embed/7erBUs97qVE');
        sessionStorage.setItem('blurbText', 'With a more mature dameon like php-fpm you can for and provide user isolation. You can’t do that with HHVM. The developers also stated they currently have to intention to implement that. So now I want to provide user isolation to binary on a system with poor support');
        $('.blurb__text').html(sessionStorage.getItem('blurbText'))
    });
    $('a[href="#portfolio__binaryoasis"]').click(function(){
        $('#iframe').attr('src','https://www.youtube.com/embed/2xA75J6szF0');
        sessionStorage.setItem('iframeSrc', 'https://www.youtube.com/embed/2xA75J6szF0');
        sessionStorage.setItem('blurbText', 'My long term objective is to build a hosting company. Currently, it’s just a logo and an idea. To do that though, I need two things. Customers, and a Hosting platform. It’s not feasible for me to build a datacenter, so I have to utilize companies that provide infrastructure with APIs. The objective is to use these asynchronous data concepts to link these platform with my customers. ');
        $('.blurb__text').html(sessionStorage.getItem('blurbText'))
    });
    $('a[href="#portfolio__linux"]').click(function(){
        $('#iframe').attr('src','https://www.youtube.com/embed/b9uduObgFpQ');
        sessionStorage.setItem('iframeSrc', 'https://www.youtube.com/embed/b9uduObgFpQ');
        sessionStorage.setItem('blurbText', 'Guy calls in, 40 websites on a box, 10-20 of them are hacked with terrorist flags and some sort of music playing in the background, looks like a Geo Cities website. He’s panicked and angry of course. ');
        $('.blurb__text').html(sessionStorage.getItem('blurbText'))
    });
    $('a[href="#portfolio__setups"]').click(function(){
        $('#iframe').attr('src','https://www.youtube.com/embed/1-RcWElyMr8');
        sessionStorage.setItem('iframeSrc', 'https://www.youtube.com/embed/1-RcWElyMr8');
        sessionStorage.setItem('blurbText', 'The core role was building servers, racking them, and initializing the system. What does that entail? Really any where, any one needed a server in the company, we built them. A build order would come in and you would review it for errors, sometimes clarify choices and make recommendations to modify them.  ');
        $('.blurb__text').html(sessionStorage.getItem('blurbText'))
    });

    $('a[href="#portfolio__development"]').click(function(){
        $('#iframe').attr('src','https://www.youtube.com/embed/Q0ellC5GWa8');
        sessionStorage.setItem('iframeSrc', 'https://www.youtube.com/embed/Q0ellC5GWa8');
        sessionStorage.setItem('blurbText', 'So three months ago, if you asked “Ryan, can you create a comprehensive framework that focuses on the concepts of a modern web?” I would have had to say no. Looking forward though, the idea of “can” is starting to look a lot more infinite. My skill set has skyrocketed in the last few months. ');
        $('.blurb__text').html(sessionStorage.getItem('blurbText'))
    });

    if(sessionStorage.getItem('iframeSrc')!==null) {
        $('#iframe').attr('src',sessionStorage.getItem('iframeSrc'));
        $('.blurb__text').html(sessionStorage.getItem('blurbText'));
    }
});