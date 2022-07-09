document.getElementById('ae').style.backgroundImage="url('./im-4.jpeg')";
document.getElementById('ae').style.backgroundPosition="center";
document.getElementById('ae').style.backgroundSize="cover";
document.getElementById('ae').style.backgroundRepeat="no-repeat";
// function check()
// {
//     console.log("clicked");
//     var a=document.getElementById('ed').src;
//     var d=a.split("/");
//     var curr_song=(d[3]);
//     var curr_pos=0;
//     var atcur_song;
//     var arr_song=["s1.mp3","s2.mp3","s3.mp3"];
//     for(let i=0;i<=arr_song.length-1;i++)
//     {
//         if(arr_song[i]==curr_song)
//         {
//             curr_pos=(i);
//             atcur_song=arr_song[i];
//             break;
//         }
//     }
//     if(arr_song[2]==atcur_song)
//     {
//         document.getElementById('ed').setAttribute("src","./s1.mp3");
//     }
//     else{
//         var change_song= arr_song[curr_pos+1];
//         document.getElementById('ed').setAttribute("src",change_song);
//     }
//     var index_1=arr_song.indexOf(curr_song);
//     console.log(index_1);
//     if (index_1==0)
//     {
//         document.getElementById('ae').style.backgroundImage="url('./im-1.jpeg')";
//     }
//     if (index_1==1)
//     {
//         document.getElementById('ae').style.backgroundImage="url('./im-2.jpeg')";
//         document.getElementById('ae').style.backgroundPosition="center";
//         document.getElementById('ae').style.backgroundSize="cover";
//         document.getElementById('ae').style.backgroundRepeat="no-repeat";

//     }
//     if (index_1==2)
//     {
//         document.getElementById('ae').style.backgroundImage="url('./im-4.jpeg')";
//         document.getElementById('ae').style.backgroundPosition="center";
//         document.getElementById('ae').style.backgroundSize="cover";
//         document.getElementById('ae').style.backgroundRepeat="no-repeat";
//     }
    
// }
function b()
{
    // console.log("clicked");
    var a=document.getElementById('ed').src;
    var d=a.split("/");
    var curr_song=(d[3]);
    var curr_pos=0;
    var atcur_song;
    var arr_song=["s1.mp3","s2.mp3","s3.mp3","s4.mp3"];
    var len=arr_song.length-1;
    for(let i=0;i<=arr_song.length-1;i++)
    {
        if(arr_song[i]==curr_song)
        {
            curr_pos=(i);
            atcur_song=arr_song[i];
            break;
        }
    }
    if(arr_song[len]==atcur_song)
    {
        document.getElementById('ed').setAttribute("src","./s1.mp3");
    }
    else{
        var change_song= arr_song[curr_pos+1];
        document.getElementById('ed').setAttribute("src",change_song);
    }
    var index_1=arr_song.indexOf(curr_song);
    console.log(index_1);
    if (index_1==0)
    {
        document.getElementById('ae').style.backgroundImage="url('./im-1.jpeg')";
    }
    if (index_1==1)
    {
        document.getElementById('ae').style.backgroundImage="url('./im-2.jpeg')";
        document.getElementById('ae').style.backgroundPosition="center";
        document.getElementById('ae').style.backgroundSize="cover";
        document.getElementById('ae').style.backgroundRepeat="no-repeat";

    }
    if (index_1==2)
    {
        document.getElementById('ae').style.backgroundImage="url('./s4.jpg')";
        document.getElementById('ae').style.backgroundPosition="center";
        document.getElementById('ae').style.backgroundSize="cover";
        document.getElementById('ae').style.backgroundRepeat="no-repeat";
    }
    if (index_1==3)
    {
        document.getElementById('ae').style.backgroundImage="url('./im-4.jpeg')"; 
        document.getElementById('ae').style.backgroundPosition="center";
        document.getElementById('ae').style.backgroundSize="cover";
        document.getElementById('ae').style.backgroundRepeat="no-repeat";
    }
}
function a()
{
    var c=document.getElementById('ed');
    c.pause();
}
function c()
{
    console.log("clicked");
    var a=document.getElementById('ed').src;
    var d=a.split("/");
    var curr_song=(d[3]);
    var curr_pos=0;
    var atcur_song;
    var arr_song=["s4.mp3","s3.mp3","s2.mp3","s1.mp3"];
    var len=arr_song.length-1;
    for(let i=0;i<=arr_song.length-1;i++)
    {
        if(arr_song[i]==curr_song)
        {
            curr_pos=(i);
            atcur_song=arr_song[i];
            break;
        }
    }
    if(arr_song[len]==atcur_song)
    {
        document.getElementById('ed').setAttribute("src","./s4.mp3");
    }
    else{
        var change_song= arr_song[curr_pos+1];
        document.getElementById('ed').setAttribute("src",change_song);
    }
    var index_1=arr_song.indexOf(curr_song);
    console.log(index_1);
    if (index_1==0)
    {
        document.getElementById('ae').style.backgroundImage="url('./im-1.jpeg')";
    }
    if (index_1==1)
    {
        document.getElementById('ae').style.backgroundImage="url('./im-2.jpeg')";
        document.getElementById('ae').style.backgroundPosition="center";
        document.getElementById('ae').style.backgroundSize="cover";
        document.getElementById('ae').style.backgroundRepeat="no-repeat";

    }
    if (index_1==2)
    {
        document.getElementById('ae').style.backgroundImage="url('./im-4.jpeg')"; 
        document.getElementById('ae').style.backgroundPosition="center";
        document.getElementById('ae').style.backgroundSize="cover";
        document.getElementById('ae').style.backgroundRepeat="no-repeat";
    }
    if (index_1==3)
    {
        
        document.getElementById('ae').style.backgroundImage="url('./s4.jpg')";
        document.getElementById('ae').style.backgroundPosition="center";
        document.getElementById('ae').style.backgroundSize="cover";
        document.getElementById('ae').style.backgroundRepeat="no-repeat";
    }
    
}

// function for_changebackground()
// {
    
//     // if (ind==0){
//     //     document.getElementById('ae').style.background="red";
//     // }     
//     // else if (ind==1){
//     //     document.getElementById('ae').style.background="brown";
//     // }
//     // else if (ind==2){
//     //     document.getElementById('ae').style.background="green";
//     // }
// }
//  for_changebackground();
// var a=document.getElementById('ed').src;
//     var d=a.split("/");
//     var ae=d[3];
//     var arr_song=["s3.mp3","s2.mp3","s1.mp3"];
//     var ind=arr_song.indexOf(ae);
//     console.log(ind);