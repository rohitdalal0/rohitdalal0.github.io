let btn = document.getElementById('btn-search');




function url_validate(url) {
    if (url.toLowerCase().includes('script')){
        return false;
    } else { 
        if (url.startsWith('https')) {
            return url.split('://')
        } else if (url.startsWith('http')) {
            return url.split('://')
        } else { return false; }
    }
}


btn.addEventListener('click', () => {
  var user_input = document.getElementById('user-input');
  var result_div = document.getElementById('result-div');
  input = url_validate(user_input.value)

  if (user_input.value != '' && input) {
    result_div.innerHTML = '';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=' + input[0] + '://'+ input[1] + '/robots.txt >robots.txt</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=' + input[0] + '://'+ input[1] + '/security.txt >security.txt</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+|+site:..' + input[1] + '+|+site:..*.' + input[1] + '>Subdomains</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+intitle:"index+of"+inurl:ftp+|+inurl:ssh >Exposed FTP/ssh services</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+intitle:"index+of"+|+intitle:"index+of+/" >Dir listening</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+ext:doc+|+ext:docx+|+ext:odt+|+ext:pdf+|+ext:rtf+|+ext:sxw+|+ext:psw+|+ext:ppt+|+ext:pptx+|+ext:pps+|+ext:csv+|+ext:xlsx >Exposed documents</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+intitle:%22%69%6e%64%65%78%20%6f%66%22%20%2f%65%74%63%2f%70%61%73%73%77%64 >Exposed usernames</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+intitle:%22%69%6e%64%65%78%20%6f%66%22%20%2f%65%74%63%2f%73%68%61%64%6f%77 >Exposed passwords</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+%69%6e%75%72%6c%3a%3f%71%3d%20%7c%20%69%6e%75%72%6c%3a%3f%73%3d%20%7c%20%69%6e%75%72%6c%3a%3f%73%65%61%72%63%68%3d%20%7c%20%69%6e%75%72%6c%3a%3f%71%75%65%72%79%3d%20%7c%20%69%6e%75%72%6c%3a%26%20%7c%20%69%6e%75%72%6c%3a%3f%69%64%3d%20%7c%20%69%6e%75%72%6c%3a%3f%70%69%64%3d%20%7c%20%69%6e%75%72%6c%3a%3f%63%61%74%65%67%6f%72%79%3d%20%7c%20%69%6e%75%72%6c%3a%3f%63%61%74%3d%20%7c%20%69%6e%75%72%6c%3a%3f%61%63%74%69%6f%6e%3d%20%7c%20%69%6e%75%72%6c%3a%3f%73%69%64%3d%20%7c%20%69%6e%75%72%6c%3a%3f%64%69%72%3d > Parameter URLs</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+ext:log+|+ext:txt+|+ext:conf+|+ext:cnf+|+ext:ini+|+ext:env+|+ext:sh+|+ext:bak+|+ext:backup+|+ext:swp+|+ext:old+|+ext:~+|+ext:git+|+ext:svn+|+ext:htpasswd+|+ext:htaccess >Interesting files</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q="'+ input[1] +'"+site:pastebin.com+|+site:codebeautify.org+|+site:codepen.io+|+site:scribd.com+|+site:npm.runkit.com+|+site:libraries.co+|+site:ycombinator.com+|+site:coggle.it+|+site:papaly.com+|+site:trello.com+|+site:jsdelivr.net+|+site:codeshare.io+|+site:sharecode.io+|+site:repl.it > Code Leaks</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+inurl:"redirect="+|+inurl:"return="+|+inurl:"next="+|+inurl:"redir="+|+inurl:"http"+|+inurl:"%3Dhttp"+|+inurl:"%3D%2F"+|+inurl:"redirect"=+|+inurl:"redirecturl="+|+inurl:"redirect_url="+|+inurl:"returnurl="+|+inurl:"relaystate="+|+inurl:"forward="+|+inurl:"forwardurl="+|+inurl:"forward_url="+|+inurl:"uri="+|+inurl:"dest="+|+inurl:"destination=" >Open redirect</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+%69%6e%75%72%6c%3a%63%6f%6e%66%69%67%20%7c%20%69%6e%75%72%6c%3a%65%6e%76%20%7c%20%69%6e%75%72%6c%3a%73%65%74%74%69%6e%67%20%7c%20%69%6e%75%72%6c%3a%62%61%63%6b%75%70%20%7c%20%65%78%74%3a%78%6d%6c%20%7c%20%65%78%74%3a%63%6f%6e%66%20%7c%20%65%78%74%3a%63%6e%66%20%7c%20%65%78%74%3a%72%65%67%20%7c%20%65%78%74%3a%69%6e%66%20%7c%20%65%78%74%3a%72%64%70%20%7c%20%65%78%74%3a%63%66%67%20%7c%20%65%78%74%3a%74%78%74%20%7c%20%65%78%74%3a%6f%72%61%20%7c%20%65%78%74%3a%69%6e%69 >Config files</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+%69%6e%75%72%6c%3a%65%6d%61%69%6c%3d%20%7c%20%69%6e%75%72%6c%3a%70%68%6f%6e%65%3d%20%7c%20%69%6e%75%72%6c%3a%70%61%73%73%77%6f%72%64%3d%20%7c%20%69%6e%75%72%6c%3a%73%65%63%72%65%74%3d%20%7c%20%69%6e%75%72%6c%3a%73%65%73%73%69%6f%6e%3d%20%7c%20%69%6e%75%72%6c%3a%73%65%73%73%69%6f%6e%69%64%3d%20%7c%20%69%6e%75%72%6c%3a%6a%73%65%73%73%69%6f%6e%69%64%3d%20%7c%20%69%6e%75%72%6c%3a%73%5f%69%64%3d%20%7c%20%69%6e%75%72%6c%3a%73%65%73%73%69%6f%6e%5f%69%64%3d >Sensitive URLs</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+inurl:"upload+file"+|+inurl:"upload-file.php?="+|+inurl:upload >Upload page</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:linkedin.com+"' + input[1] + '" >LinkedIn</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:facebook.com+"' + input[1] + '" >Facebook</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+intitle:"Apache+HTTP+Server"+|+intitle:"Apache+tomcat"+|+intitle:"Apache+server+status"+|+intitle:"Apache::Status"+|+inurl:server-status+|+inurl:status.html+|+inurl:apache.html >Apache server</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+intitle:"ngnix"+|+intitle:"Thank+you+for+using+nginx."+|+intitle:"Ngnix+HTTP+Server"+|+intitle:"Welcome+to+ngnix!"+|+inurl:server-status+|+inurl:status+|+inurl:ngnix_status >Ngnix server</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+inurl:/phpMyAdmin/index.php+intitle:phpmyadmin >PhpMyAdmin page</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+intitle:"index+of"+inurl:"/wp-content+|+inurl:"/wp-includes+|+inurl:/wp-json+|+inurl:/wp-config+|+inurl:/login+|+inurl:/wp-mail >Wordpress dir</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+intitle:"index+of+/"+inurl:/wp-content/plugins >Wordpress plugins</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+inurl:"admin+Login"+intitle:"Admin+Panel" >Wordpress Admin</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+inurl:login+|+inurl:logon+|+inurl:sign-in+|+inurl:signin+|+inurl:login-portal+|+inurl:user_login >Login page</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+intext:@gmail.com+|+intext:@yahoo.com+|+intext:@yahoo.co.in >eMail</a>';
    result_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+ftp+password+passwd+cred+ssh+credentials&type=code >Github search</a>';

  } else {
    user_input.classList.add ('error');
    
    setTimeout (function () {
      user_input.classList.remove ('error');
    }, 300);
  }

});
