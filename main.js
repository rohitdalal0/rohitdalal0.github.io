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
  const user_input = document.getElementById('user-input');
  const common_div = document.getElementById('common-div');
  const github_div = document.getElementById('github-div');
  const top_parameters_div = document.getElementById('top_parameters-div');
  const social_media_div = document.getElementById('social-media-div');
  input = url_validate(user_input.value)

  if (user_input.value != '' && input) {
    // Common dorks
    common_div.innerHTML = '';
    // Display heading
    document.getElementsByTagName('h6')[0].style.display='block';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=' + input[0] + '://'+ input[1] + '/robots.txt >robots.txt</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=' + input[0] + '://'+ input[1] + '/security.txt >security.txt</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:*.' + input[1] + '+OR+site:..' + input[1] + '+OR+site:..*.' + input[1] + '>Subdomains</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+intitle:"index+of"+inurl:ftp+OR+inurl:ssh >Exposed FTP/ssh services</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+intitle:"index+of"+OR+intitle:"index+of+/" >Dir listening</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+ext:doc+OR+ext:docx+OR+ext:odt+OR+ext:pdf+OR+ext:rtf+OR+ext:sxw+OR+ext:psw+OR+ext:ppt+OR+ext:pptx+OR+ext:pps+OR+ext:csv+OR+ext:xlsx >Exposed documents</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+intitle:%22%69%6e%64%65%78%20%6f%66%22%20%2f%65%74%63%2f%70%61%73%73%77%64 >Exposed usernames</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+intitle:%22%69%6e%64%65%78%20%6f%66%22%20%2f%65%74%63%2f%73%68%61%64%6f%77 >Exposed passwords</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+%69%6e%75%72%6c%3a%3f%71%3d%20%7c%20%69%6e%75%72%6c%3a%3f%73%3d%20%7c%20%69%6e%75%72%6c%3a%3f%73%65%61%72%63%68%3d%20%7c%20%69%6e%75%72%6c%3a%3f%71%75%65%72%79%3d%20%7c%20%69%6e%75%72%6c%3a%26%20%7c%20%69%6e%75%72%6c%3a%3f%69%64%3d%20%7c%20%69%6e%75%72%6c%3a%3f%70%69%64%3d%20%7c%20%69%6e%75%72%6c%3a%3f%63%61%74%65%67%6f%72%79%3d%20%7c%20%69%6e%75%72%6c%3a%3f%63%61%74%3d%20%7c%20%69%6e%75%72%6c%3a%3f%61%63%74%69%6f%6e%3d%20%7c%20%69%6e%75%72%6c%3a%3f%73%69%64%3d%20%7c%20%69%6e%75%72%6c%3a%3f%64%69%72%3d > Parameter URLs</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+ext:log+OR+ext:txt+OR+ext:conf+OR+ext:cnf+OR+ext:ini+OR+ext:env+OR+ext:sh+OR+ext:bak+OR+ext:backup+OR+ext:swp+OR+ext:old+OR+ext:~+OR+ext:git+OR+ext:svn+OR+ext:htpasswd+OR+ext:htaccess >Interesting files</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q="'+ input[1] +'"+site:pastebin.com+OR+site:jsfiddle.net+OR+site:codebeautify.org+OR+site:codepen.io > Code Leaks</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+%69%6e%75%72%6c%3a%63%6f%6e%66%69%67%20%7c%20%69%6e%75%72%6c%3a%65%6e%76%20%7c%20%69%6e%75%72%6c%3a%73%65%74%74%69%6e%67%20%7c%20%69%6e%75%72%6c%3a%62%61%63%6b%75%70%20%7c%20%65%78%74%3a%78%6d%6c%20%7c%20%65%78%74%3a%63%6f%6e%66%20%7c%20%65%78%74%3a%63%6e%66%20%7c%20%65%78%74%3a%72%65%67%20%7c%20%65%78%74%3a%69%6e%66%20%7c%20%65%78%74%3a%72%64%70%20%7c%20%65%78%74%3a%63%66%67%20%7c%20%65%78%74%3a%74%78%74%20%7c%20%65%78%74%3a%6f%72%61%20%7c%20%65%78%74%3a%69%6e%69 >Config files</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+inurl%3A%22email%3D%22%20OR%20inurl%3A%22phone%3D%22%20OR%20inurl%3A%22password%3D%22%20OR%20inurl%3A%22secret%3D%22%20OR%20inurl%3A%22session%3D%22%20OR%20inurl%3A%22sessionid%3D%22%20OR%20inurl%3A%22jsessionid%3D%22%20OR%20inurl%3A%22s_id%3D%22%20OR%20inurl%3A%22session_id%3D%22%20inurl%3D%22secret%3D%22 >Juicy URLs</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+ext%3Alog%20%7C%20ext%3Atxt%20%7C%20ext%3Aconf%20%7C%20ext%3Acnf%20%7C%20ext%3Aini%20%7C%20ext%3Aenv%20%7C%20ext%3Ash%20%7C%20ext%3Abak%20%7C%20ext%3Abackup%20%7C%20ext%3Aswp%20%7C%20ext%3Aold%20%7C%20ext%3A~%20%7C%20ext%3Agit%20%7C%20ext%3Asvn%20%7C%20ext%3Ahtpasswd%20%7C%20ext%3Ahtaccess >Juicy Extensions</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+inurl:"upload+file"+OR+inurl:"upload-file.php?="+OR+inurl:upload >Upload page</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+intitle:"Apache+HTTP+Server"+OR+intitle:"Apache+tomcat"+OR+intitle:"Apache+server+status"+OR+intitle:"Apache::Status"+OR+inurl:server-status+OR+inurl:status.html+OR+inurl:apache.html >Apache server</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+intitle:"ngnix"+OR+intitle:"Thank+you+for+using+nginx."+OR+intitle:"Ngnix+HTTP+Server"+OR+intitle:"Welcome+to+ngnix!"+OR+inurl:server-status+OR+inurl:status+OR+inurl:ngnix_status >Ngnix server</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+inurl:/phpMyAdmin/index.php+intitle:phpmyadmin >PhpMyAdmin page</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+intitle:"index+of"+inurl:"/wp-content+OR+inurl:"/wp-includes+OR+inurl:/wp-json+OR+inurl:/wp-config+OR+inurl:/login+OR+inurl:/wp-mail >Wordpress dir</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+intitle:"index+of+/"+inurl:/wp-content/plugins >Wordpress plugins</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+inurl:"admin+Login"+OR+intitle:"Admin+Panel" >Wordpress Admin</a>';
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+inurl:login+OR+inurl:logon+OR+inurl:sign-in+OR+inurl:signin+OR+inurl:login-portal+OR+inurl:user_login >Login page</a>';
    // API document
    common_div.innerHTML += '<a class="btn btn-outline-danger m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+inurl:apidocs+OR+inurl:api-docs+OR+inurl:swagger+OR+inurl:api-explorer >API Doc</a>';
      



    // vulnearbilitity parameters
    top_parameters_div.innerHTML = '';
    // Display heading
    document.getElementsByTagName('h6')[1].style.display='block';
    top_parameters_div.innerHTML += '<a class="btn btn-outline-info m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+inurl:"redirect="+OR+inurl:"return="+OR+inurl:"next="+OR+inurl:"redir="+OR+inurl:"http"+OR+inurl:"%3Dhttp"+OR+inurl:"%3D%2F"+OR+inurl:"redirect"=+OR+inurl:"redirecturl="+OR+inurl:"redirect_url="+OR+inurl:"returnurl="+OR+inurl:"relaystate="+OR+inurl:"forward="+OR+inurl:"forwardurl="+OR+inurl:"forward_url="+OR+inurl:"uri="+OR+inurl:"dest="+OR+inurl:"destination=" >Open Redirects</a>';
    top_parameters_div.innerHTML += '<a class="btn btn-outline-info m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+inurl:q=+OR+inurl:s=+OR+inurl:search=+OR+inurl:query=+OR+inurl:keyword=+OR+inurl:lang=+OR+inurl:& >XSS Prone Parameters</a>';
    top_parameters_div.innerHTML += '<a class="btn btn-outline-info m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+inurl%3Aid%3D%20OR%20inurl%3Apid%3D%20OR%20inurl%3Acategory%3D%20OR%20inurl%3Acat%3D%20OR%20inurl%3Aaction%3D%20OR%20inurl%3Asid%3D%20OR%20inurl%3Adir%3D >SQLi Prone Parameters</a>';
    top_parameters_div.innerHTML += '<a class="btn btn-outline-info m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+inurl:http+OR+inurl:url=+OR+inurl:path=+OR+inurl:dest=+OR+inurl:html=+OR+inurl:data=+OR+inurl:domain=+OR+inurl:page= >SSRF Prone Parameters</a>';
    top_parameters_div.innerHTML += '<a class="btn btn-outline-info m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+inurl:include+OR+inurl:dir+OR+inurl:detail=+OR+inurl:file=+OR+inurl:folder=+OR+inurl:inc=+OR+inurl:locate=+OR+inurl:doc=+OR+inurl:conf= >LFI Prone Parameters</a>';
    top_parameters_div.innerHTML += '<a class="btn btn-outline-info m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+inurl:cmd+OR+inurl:exec=+OR+inurl:query=+OR+inurl:code=+OR+inurl:do=+OR+inurl:run=+OR+inurl:read=+OR+inurl:ping= >RCE Prone Parameters</a>';

  
    
    // Github dorks
    github_div.innerHTML = '';
    // Display heading
    document.getElementsByTagName('h6')[2].style.display='block';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+password&type=Code >Password</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+npmrc%20_auth&type=Code >npmrc _auth</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+dockercfg&type=Code >dockercfg</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+pem%20private&type=Code >pem private</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+id_rsa&type=Code >id_rsa</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+aws_access_key_id&type=Code >aws_access_key_id</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+s3cfg&type=Code >s3cfg</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+htpasswd&type=Code >httpasswd</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+git-credentials&type=Code >Git-credentials</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+bashrc%20password&type=Code >bashrc password</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+sshd_config&type=Code >sshd_config</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+xoxp%20OR%20xoxb%20OR%20xoxa&type=Code >xoxp/xoxb/xoxa</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+SECRET_KEY&type=Code >Secret Key</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+client_secret&type=Code >client_secret</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+sshd_config&type=Code >sshd_config</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+github_token&type=Code >github_token</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+api_key&type=Code >api_key</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+FTP&type=Code >FTP</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+app_secret&type=Code >app_secret</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+passwd&type=Code >passwd</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+.env&type=Code >.env</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+.exs&type=Code >.exs</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+beanstalkd.yml&type=Code >beanstalk.yml</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+deploy.rake&type=Code >deploy.rake</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+mysql&type=Code >mysql</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+credentials&type=Code >credentials</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+PWD&type=Code >PWD</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+deploy.rake&type=Code >deploy.rake</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+.bash_history&type=Code >.bash_history</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+.sls&type=Code >.sls</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+secrets&type=Code >secrets</a>';
    github_div.innerHTML += '<a class="btn btn-outline-primary m-2" target="_blank" href=https://github.com/search?q=%22'+ input[1] +'%22+composer.json&type=Code >composer.json</a>';


  // Social media
  social_media_div.innerHTML = '';
  // Display heading
  document.getElementsByTagName('h6')[3].style.display='block';
  social_media_div.innerHTML += '<a class="btn btn-outline-secondary m-2" target="_blank" href=https://www.google.com/search?q=site:linkedin.com+"' + input[1] + '" >LinkedIn</a>';
  social_media_div.innerHTML += '<a class="btn btn-outline-secondary m-2" target="_blank" href=https://www.google.com/search?q=site:facebook.com+"' + input[1] + '" >Facebook</a>';
  social_media_div.innerHTML += '<a class="btn btn-outline-secondary m-2" target="_blank" href=https://www.google.com/search?q=site:' + input[1] + '+intext:@gmail.com+OR+intext:@yahoo.com+OR+intext:@yahoo.co.in+OR+intext:@yahoo.co* >eMail</a>';


  } else {
    user_input.classList.add ('error');
    
    setTimeout (function () {
      user_input.classList.remove ('error');
    }, 300);
  }

});
