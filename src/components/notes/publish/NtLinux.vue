 <template>
<div id="table-of-contents" role="doc-toc">
<h2>Table of Contents</h2>
<div id="text-table-of-contents" role="doc-toc">
<ul>
<li><a href="#orgb1a6a93">1. Resources</a></li>
<li><a href="#org9602f0c">2. Shell scripting</a>
<ul>
<li><a href="#orgccb2647">2.1. Creating shell script</a></li>
<li><a href="#org0981717">2.2. Define variable</a></li>
<li><a href="#orgd7bd679">2.3. Arithematic expression</a></li>
<li><a href="#org716bb79">2.4. Read user input</a></li>
<li><a href="#orgc0f786b">2.5. Numeric comparision logical operator</a></li>
<li><a href="#org5622bcf">2.6. Conditional</a></li>
<li><a href="#org40fde31">2.7. Looping</a></li>
<li><a href="#orgcb415a8">2.8. Reading files</a></li>
<li><a href="#org054d759">2.9. Execute commands inside script using backticks</a></li>
<li><a href="#orga8f2fa6">2.10. Get argument from command line</a></li>
<li><a href="#orga7bc68e">2.11. Automate scripts by scheduling via cron jobs</a></li>
<li><a href="#org072760d">2.12. Environment</a></li>
<li><a href="#org83ac826">2.13. Text manipulation</a></li>
</ul>
</li>
<li><a href="#org5324dcb">3. System administration</a>
<ul>
<li><a href="#orge8a4364">3.1. Essential Duties</a></li>
<li><a href="#org8047904">3.2. <code>groupadd</code></a></li>
<li><a href="#org880e6e5">3.3. <code>useradd</code></a></li>
<li><a href="#org8399c95">3.4. <code>usermod</code></a></li>
<li><a href="#org60e214b">3.5. <code>userdel</code></a></li>
<li><a href="#orge56eb80">3.6. Administrative priviledges</a></li>
<li><a href="#orgd06cb78">3.7. Shutdown process</a></li>
</ul>
</li>
<li><a href="#org543178c">4. Basics</a>
<ul>
<li><a href="#org0e94844">4.1. Inode number</a></li>
<li><a href="#org6a7e94c">4.2. Link</a></li>
<li><a href="#orge4aca93">4.3. History</a></li>
<li><a href="#org3cb5c16">4.4. Cmds</a></li>
<li><a href="#org397c663">4.5. Init</a></li>
<li><a href="#org23b8c79">4.6. Devices</a></li>
<li><a href="#orgbf180b5">4.7. Files</a></li>
<li><a href="#orgda22df2">4.8. Permission</a></li>
</ul>
</li>
<li><a href="#org90e82a6">5. Again setting up linux</a>
<ul>
<li><a href="#org424217f">5.1. Important thing to remember</a></li>
<li><a href="#orgb32684a">5.2. Partitioning</a></li>
</ul>
</li>
<li><a href="#orgb8b226b">6. Linux startup proces</a>
<ul>
<li><a href="#org0e197d8">6.1. Power on</a></li>
<li><a href="#org0f945ac">6.2. BIOS/UEFI</a>
<ul>
<li><a href="#orgdff63ef">BIOS (Basic input output system)</a></li>
<li><a href="#org5c78de0">UEFI (Universal Extensible Firmware Interface)</a></li>
<li><a href="#orga1eb2a4">Know the system</a></li>
</ul>
</li>
<li><a href="#org24f84e2">6.3. MBR/EFI</a></li>
<li><a href="#org1a575b4">6.4. Boot Loader</a></li>
<li><a href="#org239340d">6.5. Kernel</a></li>
<li><a href="#org1f80eb5">6.6. Initramfs</a></li>
<li><a href="#org7c45537">6.7. /sbin/init (parent process)</a></li>
<li><a href="#orga56acef">6.8. commmand shel using getty</a></li>
<li><a href="#orgf6de0b0">6.9. GUI (Xwindow or Wayland)</a></li>
</ul>
</li>
<li><a href="#org4be9c3d">7. Systemd</a></li>
<li><a href="#orgd935de7">8. Man page</a></li>
<li><a href="#org5243a6b">9. Laptop fan configuration</a></li>
<li><a href="#orgb27c87c">10. Command Categorization</a>
<ul>
<li><a href="#org3f96a68">10.1. Search</a></li>
<li><a href="#orgdd32aca">10.2. Networking</a></li>
<li><a href="#org9ef572d">10.3. About System</a></li>
<li><a href="#org1817515">10.4. Systemd</a></li>
<li><a href="#org621836d">10.5. Configure system</a></li>
<li><a href="#org13bcaa7">10.6. File</a></li>
<li><a href="#org9cf1125">10.7. User</a></li>
<li><a href="#org500018c">10.8. Security Research</a></li>
<li><a href="#org4456ae4">10.9. Filteration</a></li>
<li><a href="#org5a9d87d">10.10. Environment Varibale</a></li>
<li><a href="#org8a353e0">10.11. Compression &amp; Decompression</a></li>
</ul>
</li>
<li><a href="#org4a01bd1">11. <code>mime ^text,  label editor = ${VISUAL:-$EDITOR} -- "$@"</code></a></li>
<li><a href="#org8d1518f">12. Compression vs Archieving</a></li>
<li><a href="#org30977ca">13. ACTIVE OverTheWire</a>
<ul>
<li><a href="#orga6e4b68">13.1. Level code</a>
<ul>
<li><a href="#org5ea225a">14 (Using ssh to connect)</a></li>
<li><a href="#orgbff6122">15 (Connecting to localhost on port 30000)</a></li>
<li><a href="#orga24b56c">16 (Conneting to localhost on port 30001 through SSL)</a></li>
<li><a href="#org523b27e">17 (Finding the correct SSL port)</a></li>
</ul>
</li>
<li><a href="#org9c535b6">13.2. Base64</a></li>
<li><a href="#org3069c54">13.3. ssh (Secure shell)</a></li>
</ul>
</li>
<li><a href="#orgd089d95">14. OpenSSL</a>
<ul>
<li><a href="#org6b50200">14.1. Encrypting a Message with a Password</a></li>
<li><a href="#org55f2d3d">14.2. Decrypting a Message with a Password</a></li>
<li><a href="#org1e92c72">14.3. Encrypting a file with a Password</a></li>
</ul>
</li>
<li><a href="#org20ee203">15. Filesystem</a></li>
<li><a href="#orgf8118d8">16. SELinux (Security Enhanced Linux)</a></li>
<li><a href="#org116b95a">17. Structure of Linux</a></li>
<li><a href="#orgba2c5ab">18. heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</a></li>
</ul>
</div>
</div>


<section id="outline-container-orgb1a6a93" class="outline-2">
<h2 id="orgb1a6a93"><span class="section-number-2">1.</span> Resources</h2>
<div class="outline-text-2" id="text-1">
<p>
Syllabus type website on linux
</p>
<table>


<colgroup>
<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Desc</th>
<th scope="col" class="org-left">Link</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">Validating shell scripting</td>
<td class="org-left"><a href="https://www.shellcheck.net/">https://www.shellcheck.net/</a></td>
</tr>

<tr>
<td class="org-left">Deep dive into linux by IBM</td>
<td class="org-left"><a href="https://developer.ibm.com/tutorials/l-lpic1-map/#exam-101-topic-101-system-architecture2">https://developer.ibm.com/tutorials/l-lpic1-map/#exam-101-topic-101-system-architecture2</a></td>
</tr>

<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left"><a href="https://developer.ibm.com/technologies/linux/">https://developer.ibm.com/technologies/linux/</a></td>
</tr>

<tr>
<td class="org-left">Detailed but old (provides multiple format to study incl. pdf)</td>
<td class="org-left"><a href="https://tldp.org/LDP/tlk/tlk.html">https://tldp.org/LDP/tlk/tlk.html</a></td>
</tr>

<tr>
<td class="org-left">Kernel Development</td>
<td class="org-left"><a href="https://www.kernel.org/doc/html/latest/">https://www.kernel.org/doc/html/latest/</a></td>
</tr>

<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left"><a href="https://linux-kernel-labs.github.io/refs/heads/master/index.html">https://linux-kernel-labs.github.io/refs/heads/master/index.html</a></td>
</tr>
</tbody>
</table>

<p>
Blogs/Article on linux specific topics
</p>
<table>


<colgroup>
<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Topic</th>
<th scope="col" class="org-left">Desc</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">Structure of linux</td>
<td class="org-left"><a href="https://developer.ibm.com/articles/l-linux-kernel/">https://developer.ibm.com/articles/l-linux-kernel/</a></td>
</tr>

<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left"><a href="https://en.wikibooks.org/wiki/Linux_Basics/The_structure_of_Linux">https://en.wikibooks.org/wiki/Linux_Basics/The_structure_of_Linux</a></td>
</tr>

<tr>
<td class="org-left">Filesystem</td>
<td class="org-left"><a href="https://www.linuxfoundation.org/blog/blog/classic-sysadmin-the-linux-filesystem-explained">https://www.linuxfoundation.org/blog/blog/classic-sysadmin-the-linux-filesystem-explained</a></td>
</tr>

<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left"><a href="https://opensource.com/life/16/10/introduction-linux-filesystems">https://opensource.com/life/16/10/introduction-linux-filesystems</a></td>
</tr>

<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>
</tbody>
</table>

<p>
Books/Pdfs
</p>
<table>


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Author</th>
<th scope="col" class="org-left">Desc</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">The linux bible</td>
<td class="org-left">Christopher Negus</td>
<td class="org-left">&#xa0;</td>
</tr>

<tr>
<td class="org-left">RedHat Deployment guide</td>
<td class="org-left">Red hat</td>
<td class="org-left">Teachs you to the end point of any topic</td>
</tr>

<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>
</tbody>
</table>

<p>
Online Challenges
</p>
<table>


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Site</th>
<th scope="col" class="org-left">Support</th>
<th scope="col" class="org-left">Desc</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left"><a href="http://eudyptula-challenge.org/">http://eudyptula-challenge.org/</a></td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Kernel development challenge, which is not active</td>
</tr>

<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left"><a href="https://github.com/agelastic/eudyptula">https://github.com/agelastic/eudyptula</a></td>
<td class="org-left">Someone posted the challenge on github archieve</td>
</tr>

<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left"><a href="https://git.kernel.org/">https://git.kernel.org/</a></td>
<td class="org-left">&#xa0;</td>
</tr>

<tr>
<td class="org-left"><a href="https://kernelnewbies.org/">https://kernelnewbies.org/</a></td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Kernel dev incl. tutorial</td>
</tr>

<tr>
<td class="org-left"><a href="https://linuxupskillchallenge.com/">https://linuxupskillchallenge.com/</a></td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Guide to become sys admin&#x2026; start from server to conf.</td>
</tr>

<tr>
<td class="org-left"><a href="https://lwn.net/Kernel/LDD3/">https://lwn.net/Kernel/LDD3/</a></td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Kernel driver book</td>
</tr>

<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>
</tbody>
</table>
</div>
</section>

<section id="outline-container-org9602f0c" class="outline-2">
<h2 id="org9602f0c"><span class="section-number-2">2.</span> Shell scripting</h2>
<div class="outline-text-2" id="text-2">
</div>
<div id="outline-container-orgccb2647" class="outline-3">
<h3 id="orgccb2647"><span class="section-number-3">2.1.</span> Creating shell script</h3>
<div class="outline-text-3" id="text-2-1">
<div class="org-src-container">
<pre class="src src-shell"># Create a shell script file.
touch script.sh 

# Find where bin file of program is located
which bash

# Provide execution permission
chmod u+x script.sh
</pre>
</div>

<p>
<code>~/script.sh</code> 
</p>
<div class="org-src-container">
<pre class="src src-shell"># Shebang, to let pc know to execute it via bash shell
#! usr/bin/bash

echo "Output from script"
</pre>
</div>
</div>
</div>

<div id="outline-container-org0981717" class="outline-3">
<h3 id="org0981717"><span class="section-number-3">2.2.</span> Define variable</h3>
<div class="outline-text-3" id="text-2-2">
<div class="org-src-container">
<pre class="src src-shell">var=value
echo $var
</pre>
</div>
</div>
</div>

<div id="outline-container-orgd7bd679" class="outline-3">
<h3 id="orgd7bd679"><span class="section-number-3">2.3.</span> Arithematic expression</h3>
<div class="outline-text-3" id="text-2-3">
<p>
<code>+ - * / ** %</code>
</p>
<div class="org-src-container">
<pre class="src src-shell">var=$((expression))
</pre>
</div>
<div class="org-src-container">
<pre class="src src-shell">echo "scale=2;22/7" | bc
# bc is a calculator and scale=2 defines the upto decimal point 
</pre>
</div>
</div>
</div>

<div id="outline-container-org716bb79" class="outline-3">
<h3 id="org716bb79"><span class="section-number-3">2.4.</span> Read user input</h3>
<div class="outline-text-3" id="text-2-4">
<div class="org-src-container">
<pre class="src src-shell">read -p "Prompt for user input" var_name
</pre>
</div>
</div>
</div>

<div id="outline-container-orgc0f786b" class="outline-3">
<h3 id="orgc0f786b"><span class="section-number-3">2.5.</span> Numeric comparision logical operator</h3>
<div class="outline-text-3" id="text-2-5">
<div class="org-src-container">
<pre class="src src-shell">-eq # equal
-gt # greater than
-ge # greater than equal to
-lt # less than 
-le # less than equal to
-ne # not equal to 
</pre>
</div>
</div>
</div>

<div id="outline-container-org5622bcf" class="outline-3">
<h3 id="org5622bcf"><span class="section-number-3">2.6.</span> Conditional</h3>
<div class="outline-text-3" id="text-2-6">
<div class="org-src-container">
<pre class="src src-shell">if [[conditional]]
then
statement
elif [[$a -gt 40 -a $b -lt 6 ]]; then # AND condition
statement
elif [[$a -gt 40 -o $b -lt 6 ]]; then # OR condition
else
do
statement
fi
</pre>
</div>
</div>
</div>

<div id="outline-container-org40fde31" class="outline-3">
<h3 id="org40fde31"><span class="section-number-3">2.7.</span> Looping</h3>
<div class="outline-text-3" id="text-2-7">
<div class="org-src-container">
<pre class="src src-shell"># Looping with numbers
for i in {1..5} 

# Looping with string
for x in text1 text2 text3

# While
i=1
while [[$i -le 10]] ; do
echo "$i"
((i+=1))
done
</pre>
</div>
</div>
</div>

<div id="outline-container-orgcb415a8" class="outline-3">
<h3 id="orgcb415a8"><span class="section-number-3">2.8.</span> Reading files</h3>
<div class="outline-text-3" id="text-2-8">
<div class="org-src-container">
<pre class="src src-shell">LINE=1
while read -r CURRENT_LINE
do
echo "$LINE: $CURRENT_LINE"
((LINE++))
done &lt; "sample_file.txt"
</pre>
</div>
</div>
</div>

<div id="outline-container-org054d759" class="outline-3">
<h3 id="org054d759"><span class="section-number-3">2.9.</span> Execute commands inside script using backticks</h3>
<div class="outline-text-3" id="text-2-9">
<div class="org-src-container">
<pre class="src src-shell">var=`df -h | grep tmpfs`
echo $var
</pre>
</div>
</div>
</div>

<div id="outline-container-orga8f2fa6" class="outline-3">
<h3 id="orga8f2fa6"><span class="section-number-3">2.10.</span> Get argument from command line</h3>
<div class="outline-text-3" id="text-2-10">
<div class="org-src-container">
<pre class="src src-shell">for x in $@ # $@ - position of the param starting from 1 
</pre>
</div>
</div>
</div>

<div id="outline-container-orga7bc68e" class="outline-3">
<h3 id="orga7bc68e"><span class="section-number-3">2.11.</span> Automate scripts by scheduling via cron jobs</h3>
<div class="outline-text-3" id="text-2-11">
<div class="org-src-container">
<pre class="src src-shell"># * repr minute hour day month weekday (s) 
* * * * * sh /path/to/script.sh
5 0 * 8 * sh script.sh # schedule at 00:05 in august
0 22 ** 1-5 sh script.sh # schedule at 22:00 on every day-of-week from mon to fri
crontab -l # list of scheduled scripts for a particular user 
</pre>
</div>
</div>
</div>

<div id="outline-container-org072760d" class="outline-3">
<h3 id="org072760d"><span class="section-number-3">2.12.</span> Environment</h3>
<div class="outline-text-3" id="text-2-12">
<p>
<code>env</code> :: list all environment variables
<code>$PATH</code> :: where system looks for binaries for cmds 
</p>
</div>
</div>

<div id="outline-container-org83ac826" class="outline-3">
<h3 id="org83ac826"><span class="section-number-3">2.13.</span> Text manipulation</h3>
<div class="outline-text-3" id="text-2-13">
<dl class="org-dl">
<dt><code>&lt;</code> <code>&gt;</code></dt><dd>Redirection operator.</dd>
<dt><code>ls &gt; file</code></dt><dd>stdout to the file.</dd>
<dt><code>&lt; file</code></dt><dd>Output the file content into stdin.</dd>
<dt><code>ls /folder_that_not_exists &gt; file</code></dt><dd>Outputs an error to terminal but not to the file</dd>
<dt><code>0</code> stdin, <code>1</code> stdout, <code>2</code> stderr</dt><dd>Descriptor used to access file or streams
<dl class="org-dl">
<dt>access <b>stderr</b></dt><dd><code>ls /folder_that_not_exists 2&gt; file</code></dd>
<dt>access both <b>stdout</b> &amp; <b>stdin</b></dt><dd><code>ls /folder_that_not_exists &amp;&gt; file</code> or <code>&amp;&gt; file</code></dd>
<dt>delete <b>stderr</b> msg</dt><dd><code>ls /folder_that_not_exits &gt; /dev/null</code></dd>
</dl></dd>
<dt>cut :: prints seleted parts of line, <code>paste --serial file1 file2</code></dt><dd>show combined text file.</dd>
<dt><code>head --line 15 file</code></dt><dd>Get first 15 lines from file, <code>tail</code> .</dd>
<dt>(no term)</dt><dd><code>expand</code> and <code>unexpand</code></dd>
<dt><code>join</code></dt><dd>join 2 files with common column
<dl class="org-dl">
<dt><code>join -1 1 -2 2 file1 file2</code></dt><dd>-1 from file , 1 common column</dd>
</dl></dd>
</dl>
</div>
</div>
</section>

<section id="outline-container-org5324dcb" class="outline-2">
<h2 id="org5324dcb"><span class="section-number-2">3.</span> System administration</h2>
<div class="outline-text-2" id="text-3">
</div>
<div id="outline-container-orge8a4364" class="outline-3">
<h3 id="orge8a4364"><span class="section-number-3">3.1.</span> Essential Duties</h3>
<div class="outline-text-3" id="text-3-1">
<dl class="org-dl">
<dt>Controlling Accesss</dt><dd>Create a/c of new user &amp; managing permissions.</dd>
<dt>Adding Hardware</dt><dd>Install &amp; configuration.</dd>
<dt>(no term)</dt><dd>Automating tasks</dd>
<dt>Overseeing Backups</dt><dd>Backing up &amp; restoring timely.</dd>
<dt>(no term)</dt><dd>Installing &amp; Upgrading Software</dd>
<dt>Monitoring</dt><dd>Collecting &amp; analyzing log files. Keeps eyes on server disk space.</dd>
<dt>(no term)</dt><dd>Troubleshooting</dd>
<dt>(no term)</dt><dd>Maintaining local document</dd>
<dt>(no term)</dt><dd>Monitoring Security</dd>
<dt>(no term)</dt><dd>Tuning Performance</dd>
<dt>(no term)</dt><dd>Developing site policy</dd>
<dt>(no term)</dt><dd>FireFighting</dd>
</dl>
</div>
</div>

<div id="outline-container-org8047904" class="outline-3">
<h3 id="org8047904"><span class="section-number-3">3.2.</span> <code>groupadd</code></h3>
<div class="outline-text-3" id="text-3-2">
<div class="org-src-container">
<pre class="src src-shell">groupadd --gid groupdID group_name
</pre>
</div>
</div>
</div>

<div id="outline-container-org880e6e5" class="outline-3">
<h3 id="org880e6e5"><span class="section-number-3">3.3.</span> <code>useradd</code></h3>
<div class="outline-text-3" id="text-3-3">
<div class="org-src-container">
<pre class="src src-shell">useradd -u userId -g group_no -d user_login_dir -s user_login_shell -M name_of_user
</pre>
</div>
</div>
</div>

<div id="outline-container-org8399c95" class="outline-3">
<h3 id="org8399c95"><span class="section-number-3">3.4.</span> <code>usermod</code></h3>
<div class="outline-text-3" id="text-3-4">
<div class="org-src-container">
<pre class="src src-shell">usermod --comment     add comment for user account
--home        modify dir of user a/c
--expiredate  disable a/c on yyyy-mm-dd
--gid         change primary group of user
--groups      list of extra groups
--append    add user to supplimentry groups, works with --groups only
--login       change login name
--lock        lock user password
--move-home   move home dir to new dir
--password    weird
--shell       create a specific shell for new a/c
--uid         assign uid 0-999
--unlock      removes users password
</pre>
</div>
</div>
</div>

<div id="outline-container-org60e214b" class="outline-3">
<h3 id="org60e214b"><span class="section-number-3">3.5.</span> <code>userdel</code></h3>
<div class="outline-text-3" id="text-3-5">
<div class="org-src-container">
<pre class="src src-shell">userdel user_name
</pre>
</div>
<p>
User home dir and mail spool dir do not get deleted.
<code>-r</code> :: remove home dir
</p>
<ul class="org-ul">
<li>If user is logged in
<ul class="org-ul">
<li>log them out</li>
<li>kill all the process <code>kill all -u user_name</code></li>
<li>delete user <code>userdel -f user_name</code></li>
</ul></li>
</ul>
</div>
</div>

<div id="outline-container-orge56eb80" class="outline-3">
<h3 id="orge56eb80"><span class="section-number-3">3.6.</span> Administrative priviledges</h3>
<div class="outline-text-3" id="text-3-6">
<dl class="org-dl">
<dt><code>wall</code></dt><dd>write message to all user</dd>
<dt>date</dt><dd></dd>

<dt>ulimit</dt><dd>set limitation on max files size the user can have</dd>
<dt>(no term)</dt><dd>controlling use of <code>ar</code> &amp; <code>cron</code></dd>
<dt>(no term)</dt><dd>maintain security password</dd>
</dl>
</div>
</div>

<div id="outline-container-orgd06cb78" class="outline-3">
<h3 id="orgd06cb78"><span class="section-number-3">3.7.</span> Shutdown process</h3>
<div class="outline-text-3" id="text-3-7">
<ul class="org-ul">
<li>Notify all user through <code>wall</code></li>
<li>Send signal to all running processes so they will terminate normally.</li>
<li>Log users off &amp; kill remaining processes.</li>
<li>Unmount all secondary system.</li>
<li>Write info about the file system status to disk.</li>
</ul>
</div>
</div>
</section>
<section id="outline-container-org543178c" class="outline-2">
<h2 id="org543178c"><span class="section-number-2">4.</span> Basics</h2>
<div class="outline-text-2" id="text-4">
</div>
<div id="outline-container-org0e94844" class="outline-3">
<h3 id="org0e94844"><span class="section-number-3">4.1.</span> Inode number</h3>
<div class="outline-text-3" id="text-4-1">
<p>
<code>ls -i file</code> :: list file with inode no.
assigned to a file / folder with details stored in inode table.
</p>

<p>
Info that are covered
</p>
<ul class="org-ul">
<li>owner of file</li>
<li>group to owner belongs</li>
<li>type of file</li>
<li>file access permission</li>
<li>date/time last accessed</li>
<li>date/time last modified</li>
<li>no. of links to the file</li>
<li>size of file</li>
<li>pointer to the block storing file&rsquo;s content</li>
</ul>
</div>
</div>

<div id="outline-container-org6a7e94c" class="outline-3">
<h3 id="org6a7e94c"><span class="section-number-3">4.2.</span> Link</h3>
<div class="outline-text-3" id="text-4-2">
<p>
<code>ln [option] target link_name</code>
</p>

<ul class="org-ul">
<li><b>Hard links</b>
<ul class="org-ul">
<li>same inode value</li>
<li>no extra space</li>
<li>fast accesibility</li>
<li>only on file no dir</li>
<li>delete original &amp; still accessible</li>
</ul></li>
<li><b>Soft links</b>
<ul class="org-ul">
<li>path to original file</li>
<li>extra space</li>
<li>delete original &amp; its not accessible anymore</li>
<li>applied to file &amp; dir</li>
</ul></li>
</ul>
</div>
</div>

<div id="outline-container-orge4aca93" class="outline-3">
<h3 id="orge4aca93"><span class="section-number-3">4.3.</span> History</h3>
<div class="outline-text-3" id="text-4-3">
<dl class="org-dl">
<dt>1969</dt><dd>Unix by Ken Thompson</dd>
<dt>1991</dt><dd>Linux by Linux Torvald</dd>
</dl>
</div>
</div>

<div id="outline-container-org3cb5c16" class="outline-3">
<h3 id="org3cb5c16"><span class="section-number-3">4.4.</span> Cmds</h3>
<div class="outline-text-3" id="text-4-4">
<div class="org-src-container">
<pre class="src src-shell">date
whoami
echo $SHELL
pwd
cd . (current dir) ..(previous dir) ~ (home) /(root
ls
Output - 
{d/l(dir/link)r(read)w(write)x(execute)}user{r-(no_permission)-}group{r--}others no._of_links owner owner_grp file_size last_modification dir_name
clear
less file
find
file file
history
touch
cat &gt; text.txt
mkdri -p(recurssive) dir/dir/dir
rm -r(recurssive) file
rmdir -p dir_name/dir/dir
cp -i(prompt) srouce destination
-p(preserve mode,ownershipe, timestamp) 
-r(dir recurssively)
-v
mv
</pre>
</div>
</div>
</div>

<div id="outline-container-org397c663" class="outline-3">
<h3 id="org397c663"><span class="section-number-3">4.5.</span> Init</h3>
</div>
<div id="outline-container-org23b8c79" class="outline-3">
<h3 id="org23b8c79"><span class="section-number-3">4.6.</span> Devices</h3>
</div>
<div id="outline-container-orgbf180b5" class="outline-3">
<h3 id="orgbf180b5"><span class="section-number-3">4.7.</span> Files</h3>
</div>
<div id="outline-container-orgda22df2" class="outline-3">
<h3 id="orgda22df2"><span class="section-number-3">4.8.</span> Permission</h3>
</div>
</section>
<section id="outline-container-org90e82a6" class="outline-2">
<h2 id="org90e82a6"><span class="section-number-2">5.</span> Again setting up linux</h2>
<div class="outline-text-2" id="text-5">
</div>
<div id="outline-container-org424217f" class="outline-3">
<h3 id="org424217f"><span class="section-number-3">5.1.</span> Important thing to remember</h3>
<div class="outline-text-3" id="text-5-1">
<ul class="org-ul">
<li>Always have a <b>booted pendrive</b> of the <b>OS</b> because system can break anytime.</li>
<li>Keep the <b>personal files / important files</b> in separate partition because once its lost it&rsquo;s lost foreever (<i>unless you do data recovery</i>).</li>
<li>Backup <b>config files</b>.</li>
<li>Never break <b>initramfs</b>, hard to find solution for it.</li>
<li>Never stops/disconnet in between any type of update.</li>
<li>Remember to write commands because theres a lot.</li>
<li><b>man commands</b> before using anything, read about it.</li>
</ul>
</div>
</div>

<div id="outline-container-orgb32684a" class="outline-3">
<h3 id="orgb32684a"><span class="section-number-3">5.2.</span> Partitioning</h3>
<div class="outline-text-3" id="text-5-2">
<ul class="org-ul">
<li>efi    (/boot/esp)    (fat32)    512MB - 1GB (if planning to install multiple OS)</li>
<li>/      (root)         (ext4)     30GB  - more</li>
<li>~      (home)         (ext4)     40GB  - 60GB</li>
<li>swap                             2GB   - RAM+2</li>
<li>file   (/mnt/personal)(ntfs)     10GB  - more (keep the important files in different partition)</li>
</ul>
</div>
</div>
</section>

<section id="outline-container-orgb8b226b" class="outline-2">
<h2 id="orgb8b226b"><span class="section-number-2">6.</span> Linux startup proces</h2>
<div class="outline-text-2" id="text-6">
</div>
<div id="outline-container-org0e197d8" class="outline-3">
<h3 id="org0e197d8"><span class="section-number-3">6.1.</span> Power on</h3>
</div>
<div id="outline-container-org0f945ac" class="outline-3">
<h3 id="org0f945ac"><span class="section-number-3">6.2.</span> BIOS/UEFI</h3>
<div class="outline-text-3" id="text-6-2">
<p>
Initialize the hardware &amp; test them at starup.
</p>
</div>

<div id="outline-container-orgdff63ef" class="outline-4">
<h4 id="orgdff63ef">BIOS (Basic input output system)</h4>
<div class="outline-text-4" id="text-orgdff63ef">
<p>
Developed in the 70s.
</p>
</div>

<ul class="org-ul">
<li><a id="orgbd82fa4"></a>Porcess<br />
<div class="outline-text-5" id="text-orgbd82fa4">
<ol class="org-ol">
<li>Power on.</li>
<li>Test power supply.</li>
<li>Power up the CPU.</li>
<li>BIOS code from BIOS chip on motherboard copied to memory then executed by CPU.</li>
<li>BIOS program persom <b>POST (Power On Self Test)</b>
<ul class="org-ul">
<li>Checks memory, storage devices, display devices.</li>
<li>Checks keyboard and mouse.</li>
<li>Initializes additional BIOS chip if available.</li>
<li>If any problem occur, it will <i>beep</i>.</li>
</ul></li>
<li>Search for bootable partition name MBR.</li>
</ol>
</div>
</li>

<li><a id="orgb6bdf6a"></a>Limitation<br />
<div class="outline-text-5" id="text-orgb6bdf6a">
<ol class="org-ol">
<li>Only supports 16bit instruction set.</li>
<li>Can only access limited amount of RAM.</li>
<li>Can only access storage device upto 2TB.</li>
</ol>
</div>
</li>
</ul>
</div>

<div id="outline-container-org5c78de0" class="outline-4">
<h4 id="org5c78de0">UEFI (Universal Extensible Firmware Interface)</h4>
<div class="outline-text-4" id="text-org5c78de0">
<p>
Developed in 2005 to address BIOS limitation &amp; adds additional features.
</p>
</div>

<ul class="org-ul">
<li><a id="orga4a68d5"></a>Pros<br />
<div class="outline-text-5" id="text-orga4a68d5">
<ol class="org-ol">
<li>Supports 32/64 bit instructions set.</li>
<li>Access to large RAM.</li>
<li>Can run drivers without any OS.</li>
<li>Supports over 2TB storage devices using GPT(GUID (Globally Unique Identifires) Partition Table).</li>
<li>EFI partition stors bootloader but not limited to it.
<ul class="org-ul">
<li>Partition can hold other porgrams also like recovery tool that can be run without need of OS in case of any failure.</li>
</ul></li>
<li>Provides secure boot.
<ul class="org-ul">
<li>It scans OS &amp; drives for digital signed keys to check authenticitym &amp; only run program if its proven.</li>
<li>But its not restricted to it, custom complied linux can also be used by disabling the secure boot or adding the custom digital key to UEFI.</li>
</ul></li>
<li>Provides remote access.</li>
<li>Provices fast boot.</li>
<li>Support different CPU architecture.</li>
</ol>
</div>
</li>
</ul>
</div>

<div id="outline-container-orga1eb2a4" class="outline-4">
<h4 id="orga1eb2a4">Know the system</h4>
<div class="outline-text-4" id="text-orga1eb2a4">
</div>
<ul class="org-ul">
<li><a id="org5eb828f"></a>On Linux<br />
<div class="outline-text-5" id="text-org5eb828f">
<dl class="org-dl">
<dt><code>dmidecode</code></dt><dd>Tool for dumping computer hardware component info.
<dl class="org-dl">
<dt>-t</dt><dd>baseboard</dd>
<dt>-s</dt><dd>bios-version</dd>
</dl></dd>
</dl>
</div>
</li>

<li><a id="org302ee9c"></a>On Windows<br />
<div class="outline-text-5" id="text-org302ee9c">
<dl class="org-dl">
<dt><code>wmic</code></dt><dd>Hardware level info
<ul class="org-ul">
<li>baseboard get product, manufacture</li>
<li>bios get smbiosversion</li>
</ul></dd>
</dl>
</div>
</li>
</ul>
</div>
</div>

<div id="outline-container-org24f84e2" class="outline-3">
<h3 id="org24f84e2"><span class="section-number-3">6.3.</span> MBR/EFI</h3>
</div>

<div id="outline-container-org1a575b4" class="outline-3">
<h3 id="org1a575b4"><span class="section-number-3">6.4.</span> Boot Loader</h3>
</div>

<div id="outline-container-org239340d" class="outline-3">
<h3 id="org239340d"><span class="section-number-3">6.5.</span> Kernel</h3>
</div>

<div id="outline-container-org1f80eb5" class="outline-3">
<h3 id="org1f80eb5"><span class="section-number-3">6.6.</span> Initramfs</h3>
</div>

<div id="outline-container-org7c45537" class="outline-3">
<h3 id="org7c45537"><span class="section-number-3">6.7.</span> /sbin/init (parent process)</h3>
</div>

<div id="outline-container-orga56acef" class="outline-3">
<h3 id="orga56acef"><span class="section-number-3">6.8.</span> commmand shel using getty</h3>
</div>

<div id="outline-container-orgf6de0b0" class="outline-3">
<h3 id="orgf6de0b0"><span class="section-number-3">6.9.</span> GUI (Xwindow or Wayland)</h3>
</div>
</section>

<section id="outline-container-org4be9c3d" class="outline-2">
<h2 id="org4be9c3d"><span class="section-number-2">7.</span> Systemd</h2>
<div class="outline-text-2" id="text-7">
<p>
Systemd is not a single element but a collection of programs, daemons, libraries, technologies and kernel components.
</p>
<dl class="org-dl">
<dt>Unit file</dt><dd><p>
Small programs known as daemons
</p>
<pre class="example" id="orge862496">
[Unit]
Description=fast remote file copy program daemon
ConditionPathExists=/etc/rsyncd.conf
[Service]
ExecStart=/usr/bin/rsync --daemon --no-detach
[Install]
WantedBy=multi-user.target
</pre>
<ul class="org-ul">
<li>Unit file location <code>/usr/lib/systemd/system/</code> or <code>/lib/systemd/systemd/</code>  (local unit file with highest priority).</li>
</ul></dd>
<dt><code>systemctl</code></dt><dd>Status of systemd daemons &amp; configuration.
<ul class="org-ul">
<li><code>systemctl list-units --type=service</code></li>
<li><code>sytemctl list-units-files --type=service</code></li>
</ul></dd>
</dl>
</div>
</section>

<section id="outline-container-orgd935de7" class="outline-2">
<h2 id="orgd935de7"><span class="section-number-2">8.</span> Man page</h2>
<div class="outline-text-2" id="text-8">
<ul class="org-ul">
<li>Section Contents
<ul class="org-ul">
<li>1 User+ level commands and applications</li>
<li>2 System calls and kernel error codes</li>
<li>3 Library calls</li>
<li>4 Device drivers and network protocols</li>
<li>5 Standard file formats</li>
<li>6 Games and demonstrations</li>
<li>7 Miscellaneous files and documents</li>
<li>8 System administration commands</li>
<li>9 Obscure kernel specs and interface</li>
</ul></li>
<li id="`man -k &lt;keyword&gt;`">list of man page that have &lt;keyword&gt;
<ul class="org-ul">
<li>need to rebuild the file for this database whenever a new man is added
<ul class="org-ul">
<li>`makewhatis`(RHEL), `mandb` (ubuntu)</li>
</ul></li>
</ul></li>
<li>nroff for man pages is stored under `/usr/share/man` &amp; compressed with gzip.
<ul class="org-ul">
<li>man decompress them on the fly &amp; maintains chache of formatted pages in `/var/cache/man` or `/usr/share/man`.</li>
<li id="`manpath`">path for man page searching</li>
<li id="nroff">format doc written in groff CONFUSE</li>
</ul></li>
</ul>
</div>
</section>

<section id="outline-container-org5243a6b" class="outline-2">
<h2 id="org5243a6b"><span class="section-number-2">9.</span> Laptop fan configuration</h2>
<div class="outline-text-2" id="text-9">
<p>
laptop was heating up-tick<sub>sched</sub><sub>timer</sub> - 1.68W&#x2026; after restart its gone
</p>
<div class="org-src-container">
<pre class="src src-shell">installed - tlp
tlp-stat -g
fancontrol
pwmconfig ---pwm contorl not found
not able to control fan
isw--- not supprt for GF63
sudo sensors-detect
/etc/init.d/kmod start
detecting sensors... second one to restart it to load module
</pre>
</div>
</div>
</section>

<section id="outline-container-orgb27c87c" class="outline-2">
<h2 id="orgb27c87c"><span class="section-number-2">10.</span> Command Categorization</h2>
<div class="outline-text-2" id="text-10">
</div>
<div id="outline-container-org3f96a68" class="outline-3">
<h3 id="org3f96a68"><span class="section-number-3">10.1.</span> Search</h3>
<div class="outline-text-3" id="text-10-1">
<table>


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">which</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Search shell path for binary</td>
</tr>

<tr>
<td class="org-left">whereis</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Search boarder for the binary</td>
</tr>

<tr>
<td class="org-left">locate</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Search compiled index of FS to find particular pattern</td>
</tr>

<tr>
<td class="org-left">mlocate</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>

<tr>
<td class="org-left">updatedb</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Runs periodically through cron to update the locate index</td>
</tr>

<tr>
<td class="org-left">find</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-orgdd32aca" class="outline-3">
<h3 id="orgdd32aca"><span class="section-number-3">10.2.</span> Networking</h3>
<div class="outline-text-3" id="text-10-2">
<table>


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">tcpdump</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Get raw packet being sent to &amp; from system.</td>
</tr>

<tr>
<td class="org-left">iwctl</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Manages wifi interface through iwd</td>
</tr>

<tr>
<td class="org-left">route</td>
<td class="org-left">route -n</td>
<td class="org-left">Shows routing table</td>
</tr>

<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-org9ef572d" class="outline-3">
<h3 id="org9ef572d"><span class="section-number-3">10.3.</span> About System</h3>
<div class="outline-text-3" id="text-10-3">
<table>


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">who</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Shows who is logged in</td>
</tr>

<tr>
<td class="org-left">id</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">user &amp; group id</td>
</tr>

<tr>
<td class="org-left">date</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>

<tr>
<td class="org-left">uname</td>
<td class="org-left"><code>uname -a</code></td>
<td class="org-left">System info</td>
</tr>

<tr>
<td class="org-left">ls</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>

<tr>
<td class="org-left">whoami</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Shows username</td>
</tr>

<tr>
<td class="org-left">findmnt</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">List all mount points</td>
</tr>

<tr>
<td class="org-left">lspci</td>
<td class="org-left"><code>lspci -k</code></td>
<td class="org-left">List all drivers handled by kernel by default</td>
</tr>

<tr>
<td class="org-left">dmesg</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Output kernel&rsquo;s ring buffers</td>
</tr>

<tr>
<td class="org-left">lsblk</td>
<td class="org-left"><code>lsblk -f</code></td>
<td class="org-left">List all info of the blocks</td>
</tr>

<tr>
<td class="org-left">du</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Disk</td>
</tr>

<tr>
<td class="org-left">w</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">List users and what they are working on</td>
</tr>

<tr>
<td class="org-left">smem</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Reports memory usage using multiple filtering</td>
</tr>

<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Like aggregation of an application (like firefox)</td>
</tr>

<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-org1817515" class="outline-3">
<h3 id="org1817515"><span class="section-number-3">10.4.</span> Systemd</h3>
<div class="outline-text-3" id="text-10-4">
<table>


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">journalctl</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Outputs all the log of the system in a single file</td>
</tr>

<tr>
<td class="org-left">systemctl</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Manages systemd services</td>
</tr>

<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-org621836d" class="outline-3">
<h3 id="org621836d"><span class="section-number-3">10.5.</span> Configure system</h3>
<div class="outline-text-3" id="text-10-5">
<table>


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">genfstab</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Generate fstab including all file system mounted at that time</td>
</tr>

<tr>
<td class="org-left">pacstrap</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Installing packages into a newly installed partitioned</td>
</tr>

<tr>
<td class="org-left">arch-chroot</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Take control of newly modified root partition</td>
</tr>

<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-org13bcaa7" class="outline-3">
<h3 id="org13bcaa7"><span class="section-number-3">10.6.</span> File</h3>
<div class="outline-text-3" id="text-10-6">
<table>


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">cksum</td>
<td class="org-left"><code>cksum -a algorithm file</code></td>
<td class="org-left">Checks integrity of the downloaded file</td>
</tr>

<tr>
<td class="org-left">file</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Shows all details of any type of file</td>
</tr>

<tr>
<td class="org-left">chown</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Change owner and group</td>
</tr>

<tr>
<td class="org-left">chmod</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Change file mode bits</td>
</tr>

<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-org9cf1125" class="outline-3">
<h3 id="org9cf1125"><span class="section-number-3">10.7.</span> User</h3>
<div class="outline-text-3" id="text-10-7">
<table>


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">passwd</td>
<td class="org-left"><code>passwd -Sa</code></td>
<td class="org-left">List all existing user account</td>
</tr>

<tr>
<td class="org-left">useradd</td>
<td class="org-left"><code>useadd -m</code></td>
<td class="org-left">&#xa0;</td>
</tr>

<tr>
<td class="org-left">usemod</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>

<tr>
<td class="org-left">groupmod</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>

<tr>
<td class="org-left">groups</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">List of groups available</td>
</tr>

<tr>
<td class="org-left">userdel</td>
<td class="org-left"><code>userdel -r</code></td>
<td class="org-left">Incl. its home dir &amp; mail</td>
</tr>

<tr>
<td class="org-left">adduser</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Interactive exp. for useradd, ,chfn, passwd</td>
</tr>

<tr>
<td class="org-left">chfn</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Change you fingerprint (the info stored in /etc/passwd)</td>
</tr>

<tr>
<td class="org-left">getent</td>
<td class="org-left"><code>getent group</code></td>
<td class="org-left">&#xa0;</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-org500018c" class="outline-3">
<h3 id="org500018c"><span class="section-number-3">10.8.</span> Security Research</h3>
<div class="outline-text-3" id="text-10-8">
<table>


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">arch-audit</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Scans application for any issues</td>
</tr>

<tr>
<td class="org-left">exfitool</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Reads/Writes metadata in files</td>
</tr>

<tr>
<td class="org-left">binwalk</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Analyse, Reverse engineering, extracting firmware images</td>
</tr>

<tr>
<td class="org-left">string</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Finds every readable string a file</td>
</tr>

<tr>
<td class="org-left">xxd</td>
<td class="org-left">xxd -r input output.suffix</td>
<td class="org-left">Prints in hex or in reverse</td>
</tr>

<tr>
<td class="org-left">hexdump</td>
<td class="org-left">hexdump &#x2013;canonical file</td>
<td class="org-left">Prints readable ASCII of the hex value next to it</td>
</tr>

<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-org4456ae4" class="outline-3">
<h3 id="org4456ae4"><span class="section-number-3">10.9.</span> Filteration</h3>
<div class="outline-text-3" id="text-10-9">
<table>


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">sort</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>

<tr>
<td class="org-left">uniq</td>
<td class="org-left">&ldquo;sort uniq -u&rdquo;</td>
<td class="org-left">&#xa0;</td>
</tr>

<tr>
<td class="org-left">tr</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Translate or delete char, from stdin to stdout, basically modifying strings mkdir</td>
</tr>

<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-org5a9d87d" class="outline-3">
<h3 id="org5a9d87d"><span class="section-number-3">10.10.</span> Environment Varibale</h3>
<div class="outline-text-3" id="text-10-10">
<table>


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left"><code>cat &lt; /proc/$PID/environ</code></td>
<td class="org-left">Get list for environment specific to application</td>
</tr>

<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left"><code>sed 's:\x0:\n:g' /proc/$PID/environ</code></td>
<td class="org-left">&#xa0;</td>
</tr>

<tr>
<td class="org-left">printenv</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>

<tr>
<td class="org-left">env</td>
<td class="org-left">~env EDITOR=vim xtrem</td>
<td class="org-left">Run command under modified env</td>
</tr>
</tbody>
</table>

<div class="org-src-container">
<pre class="src src-shell"># This does something
["$(id -u)" -ge 1000] || return
for i in "$@";
do
[-d "$i"]||continue
echo "$PATH" | grep -Eq "(^|:)$i(:|$)" &amp;&amp; continue
export PATH="${PATH}:$i"
done
</pre>
</div>
<pre class="example" id="org8a943e3">
$# :: stores the number of arg. provided to the shell prg, not including the prg name
$? :: stores the exit value of last cmd that was executed
$0 :: stores the first word of the shell prg i.e name of the shell prg.
$1 $2 $3
$* :: stores all the arg. that were passed
$@ :: stores all the arg. in array like format, inside " "
export PATH="${PATH}:/home//bin"
source :: reload the file
</pre>
</div>
</div>

<div id="outline-container-org8a353e0" class="outline-3">
<h3 id="org8a353e0"><span class="section-number-3">10.11.</span> Compression &amp; Decompression</h3>
<div class="outline-text-3" id="text-10-11">
<table>


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">tar</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Archieving</td>
</tr>

<tr>
<td class="org-left">gzip</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Compression</td>
</tr>

<tr>
<td class="org-left">bzip2</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Encoding using huffman and burrower wheeler algo</td>
</tr>

<tr>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section id="outline-container-org4a01bd1" class="outline-2">
<h2 id="org4a01bd1"><span class="section-number-2">11.</span> <code>mime ^text,  label editor = ${VISUAL:-$EDITOR} -- "$@"</code></h2>
<div class="outline-text-2" id="text-11">
<ul class="org-ul">
<li>${VISUAL:-$EDITOR}
<ul class="org-ul">
<li>Part of shell parameter expansion. It means &ldquo;use the value of the VISUAL environment variable if it&rsquo;s set, otherwise use the value of the EDITOR environment variable&rdquo;.</li>
<li>VISUAL and EDITOR are standard environment variables that store the preferred text editor for the user. VISUAL is usually a visual text editor, while EDITOR might be a more basic or command-line based one</li>
</ul></li>
<li>&#x2013;
<ul class="org-ul">
<li>This is a standard way to indicate the end of command options in many Unix-like command-line interfaces. It tells the command that follows that any subsequent arguments should be treated as positional parameters rather than option.</li>
</ul></li>
<li>$@
<ul class="org-ul">
<li>This is another shell scripting construct that represents all the positional parameters passed to the script or command. Each parameter is passed as a separate argument to the command.</li>
</ul></li>
</ul>
</div>
</section>

<section id="outline-container-org8d1518f" class="outline-2">
<h2 id="org8d1518f"><span class="section-number-2">12.</span> Compression vs Archieving</h2>
<div class="outline-text-2" id="text-12">
<p>
<a href="https://dane-bulat.medium.com/archiving-and-compression-on-linux-an-introduction-3dc2490e1bb7">https://dane-bulat.medium.com/archiving-and-compression-on-linux-an-introduction-3dc2490e1bb7</a>
</p>
</div>
</section>

<section id="outline-container-org30977ca" class="outline-2">
<h2 id="org30977ca"><span class="section-number-2">13.</span> ACTIVE OverTheWire</h2>
<div class="outline-text-2" id="text-13">
</div>

<div id="outline-container-orga6e4b68" class="outline-3">
<h3 id="orga6e4b68"><span class="section-number-3">13.1.</span> Level code</h3>
<div class="outline-text-3" id="text-13-1">
<ol class="org-ol">
<li></li>

<li></li>

<li></li>

<li></li>

<li>4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw</li>
<li>HWasnPhtq9AVKe0dmk45nxy20cvUa6EG</li>
<li>morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj</li>
<li>dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc</li>
<li>4CKMh1JI91bUIZZPXDqGanal4xvAg0JM</li>
<li>FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey</li>
<li>dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr</li>
<li>7x16WNeHIi5YkIhWsfFIqoognUTyj9Q4</li>
<li>FO5dwFsc0cbaIiH0h8J2eUks2vdTDwAn</li>
<li>MU4VWeTyJk8ROof1qqmcBPaLh7lDCPvS</li>
<li>8xCjnmgoKbGLhHFAZlGE5Tmu4M2tKJQo</li>
<li>kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx</li>
<li></li>
</ol>
</div>

<div id="outline-container-org5ea225a" class="outline-4">
<h4 id="org5ea225a">14 (Using ssh to connect)</h4>
<div class="outline-text-4" id="text-org5ea225a">
<p>
The problem teaches you read doc on ssh and gets curiosity to understand the inner working of the ssh.
SSH (Secure shell), for connecting to remote server sercurely.
</p>
<ul class="org-ul">
<li>Doc is extensibly big with many option.</li>
<li>The solution is to simply tell ssh to locate the private key that requires for authentication.
Which the ssh could not able to find in .ssh config file, where it searches for the default files.</li>
<li>ssh works by generating 2 keys, public and private, as the name suggest public you share, private
you keep secret. This key is generated by both connecting nodes.</li>
</ul>
</div>
</div>

<div id="outline-container-orgbff6122" class="outline-4">
<h4 id="orgbff6122">15 (Connecting to localhost on port 30000)</h4>
<div class="outline-text-4" id="text-orgbff6122">
<p>
The problem is simple to use nc (netcat) but delusional method of ssh doc reading takes most of the time.
Netcat is an interesting program,
</p>
<ul class="org-ul">
<li>It allows full scanning of port on a network.</li>
<li>Can setup server, host html, etc.</li>
<li>Basically, 1 part of the nc set up as server and we have to connect to it through it.
<ul class="org-ul">
<li>Sending current level pswd replies back the next level pswd.</li>
</ul></li>
</ul>
</div>
</div>

<div id="outline-container-orga24b56c" class="outline-4">
<h4 id="orga24b56c">16 (Conneting to localhost on port 30001 through SSL)</h4>
<div class="outline-text-4" id="text-orga24b56c">
<p>
SSL (Secure Socket Layer), which is outdated but actually refers to TSL (Transport Security Layer).
</p>
<ul class="org-ul">
<li>SSL encrypt data being transmitted over the internet like all the websites which has <b>https</b> and not http.</li>
<li>It ensures any man-in-middle only see gibrish.</li>
<li>SSL certificate which is provided by the hosting platform, does confirm your client is talking to the
correct website and not a phising website.</li>
<li>Here, ssl is listening to port 30001 and connecting to it through nc does not work.</li>
<li>But connecting to it through openssl s<sub>client</sub> ask for input and if current level password provided, then its bingo.</li>
</ul>
</div>
</div>

<div id="outline-container-org523b27e" class="outline-4">
<h4 id="org523b27e">17 (Finding the correct SSL port)</h4>
</div>
</div>




<div id="outline-container-org9c535b6" class="outline-3">
<h3 id="org9c535b6"><span class="section-number-3">13.2.</span> Base64</h3>
<div class="outline-text-3" id="text-13-2">
<p>
Binary to text encoding scheme.
<a href="https://en.wikipedia.org/wiki/Base64">https://en.wikipedia.org/wiki/Base64</a>
<code>base64 -d</code> :: decodes
</p>
</div>
</div>

<div id="outline-container-org3069c54" class="outline-3">
<h3 id="org3069c54"><span class="section-number-3">13.3.</span> ssh (Secure shell)</h3>
</div>
</section>

<section id="outline-container-orgd089d95" class="outline-2">
<h2 id="orgd089d95"><span class="section-number-2">14.</span> OpenSSL</h2>
<div class="outline-text-2" id="text-14">
</div>
<div id="outline-container-org6b50200" class="outline-3">
<h3 id="org6b50200"><span class="section-number-3">14.1.</span> Encrypting a Message with a Password</h3>
<div class="outline-text-3" id="text-14-1">
<div class="org-src-container">
<pre class="src src-shell">echo "LinuxConfig.org" | openssl enc -aes-256-cbc -a -salt -pbkdf2 -pass pass:mysecretpassword
</pre>
</div>
</div>
</div>

<div id="outline-container-org55f2d3d" class="outline-3">
<h3 id="org55f2d3d"><span class="section-number-3">14.2.</span> Decrypting a Message with a Password</h3>
<div class="outline-text-3" id="text-14-2">
<div class="org-src-container">
<pre class="src src-shell">echo "U2FsdGVkX1/POwwfJq2VK3mqDqFO1Ttfuc+q8UuvoQ4Z0F2byx1uNI3NSjeipkAi" | openssl enc -aes-256-cbc -a -d -salt -pbkdf2 -pass pass:mysecretpassword
</pre>
</div>
</div>
</div>

<div id="outline-container-org1e92c72" class="outline-3">
<h3 id="org1e92c72"><span class="section-number-3">14.3.</span> Encrypting a file with a Password</h3>
</div>
</section>

<section id="outline-container-org20ee203" class="outline-2">
<h2 id="org20ee203"><span class="section-number-2">15.</span> Filesystem</h2>
<div class="outline-text-2" id="text-15">
<table>


<colgroup>
<col  class="org-right" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-right">Num</th>
<th scope="col" class="org-left">Dir</th>
<th scope="col" class="org-left">Desc</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-right">1</td>
<td class="org-left">/</td>
<td class="org-left">Root dir, everything is nested under this dir.</td>
</tr>

<tr>
<td class="org-right">2</td>
<td class="org-left">/bin</td>
<td class="org-left">Binaries and most common built-in programs.</td>
</tr>

<tr>
<td class="org-right">3</td>
<td class="org-left">/boot</td>
<td class="org-left">Contains kernel boot.</td>
</tr>

<tr>
<td class="org-right">4</td>
<td class="org-left">/dev</td>
<td class="org-left">Device files.</td>
</tr>

<tr>
<td class="org-right">5</td>
<td class="org-left">/etc</td>
<td class="org-left">Core system config files.</td>
</tr>

<tr>
<td class="org-right">6</td>
<td class="org-left">/home</td>
<td class="org-left">Personal user dir.</td>
</tr>

<tr>
<td class="org-right">7</td>
<td class="org-left">/lib</td>
<td class="org-left">Holds libs files that binary can use</td>
</tr>

<tr>
<td class="org-right">8</td>
<td class="org-left">/media</td>
<td class="org-left">Attachment point for removable media like usb drive</td>
</tr>

<tr>
<td class="org-right">9</td>
<td class="org-left">/mnt</td>
<td class="org-left">Temporarily mounted fs.</td>
</tr>

<tr>
<td class="org-right">10</td>
<td class="org-left">/opt</td>
<td class="org-left">Optional application software package.</td>
</tr>

<tr>
<td class="org-right">11</td>
<td class="org-left">/proc</td>
<td class="org-left">Information about currently running process.</td>
</tr>

<tr>
<td class="org-right">12</td>
<td class="org-left">/root</td>
<td class="org-left">The root user&rsquo;s home dir.</td>
</tr>

<tr>
<td class="org-right">13</td>
<td class="org-left">/run</td>
<td class="org-left">Information about running system since last boot.</td>
</tr>

<tr>
<td class="org-right">14</td>
<td class="org-left">/sbin</td>
<td class="org-left">Contains special system binaries, only ran by root.</td>
</tr>

<tr>
<td class="org-right">15</td>
<td class="org-left">/srv</td>
<td class="org-left">Site-specific data which are served by the system.</td>
</tr>

<tr>
<td class="org-right">16</td>
<td class="org-left">/tmp</td>
<td class="org-left">Storage for temporary files.</td>
</tr>

<tr>
<td class="org-right">17</td>
<td class="org-left">/usr</td>
<td class="org-left">User installed software and utilities.</td>
</tr>

<tr>
<td class="org-right">18</td>
<td class="org-left">/var</td>
<td class="org-left">Used for system logging, user tracking, caches, anything that can change.</td>
</tr>
</tbody>
</table>
</div>
</section>

<section id="outline-container-orgf8118d8" class="outline-2">
<h2 id="orgf8118d8"><span class="section-number-2">16.</span> SELinux (Security Enhanced Linux)</h2>
</section>



<section id="outline-container-org116b95a" class="outline-2">
<h2 id="org116b95a"><span class="section-number-2">17.</span> Structure of Linux</h2>
<div class="outline-text-2" id="text-17">

<div id="org1f3f763" class="figure">
<p><img src="inline-images/Structure_of_Linux/2024-07-25_20-23-26_Simplified_Structure_of_the_Linux_Kernel.svg" alt="2024-07-25_20-23-26_Simplified_Structure_of_the_Linux_Kernel.svg" class="org-svg" />
</p>
</div>


<div id="orgbf2e37f" class="figure">
<p><img src="inline-images/Structure_of_Linux/2024-07-25_20-30-55_ditaa-b9ffae65be16d30be11b5eca188a7a143b1b8227.png" alt="2024-07-25_20-30-55_ditaa-b9ffae65be16d30be11b5eca188a7a143b1b8227.png" />
</p>
</div>

<div id="org107a437" class="figure">
<p><img src="inline-images/Structure_of_Linux/2024-07-25_20-34-37_figure2.jpg" alt="2024-07-25_20-34-37_figure2.jpg" />
</p>
</div>
</div>
</section>


<section id="outline-container-orgba2c5ab" class="outline-2">
<h2 id="orgba2c5ab"><span class="section-number-2">18.</span> heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</h2>
</section>
 </template>
