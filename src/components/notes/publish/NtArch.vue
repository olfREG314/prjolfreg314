 <template>
<div id="table-of-contents" role="doc-toc">
<h2>Table of Contents</h2>
<div id="text-table-of-contents" role="doc-toc">
<ul>
<li><a href="#org634a182">1. Application List</a></li>
<li><a href="#org170310e">2. How to install Arch ref guide</a></li>
<li><a href="#org87264fe">3. How to manage <code>.dot</code> files</a>
<ul>
<li><a href="#orgd7791e5">3.1. Push to github</a></li>
</ul>
</li>
<li><a href="#org797a4fe">4. How to cofigure clipboard in wayland (Hyprland)</a></li>
<li><a href="#org5608a8f">5. How to set screen capturing</a></li>
<li><a href="#org16dddf6">6. How to convert from .md to .org</a></li>
<li><a href="#org749b84c">7. How to change escape key to other key in Archcraft</a></li>
<li><a href="#org5464ed3">8. REVISION Unexpected crash shutdown in Archcraft</a></li>
<li><a href="#org063c312">9. xbacklight not working in Archcraft</a></li>
<li><a href="#org82c7f50">10. optimus-manager causing screen tearing in Archcraft</a></li>
<li><a href="#orgf19df07">11. How to get temperature record in Archcraft</a></li>
<li><a href="#org4e6b644">12. How to customize touchpad to work on firefox</a></li>
<li><a href="#orgb03f23d">13. Security tools</a></li>
<li><a href="#org98cc8de">14. Custom fan control in MSI GF63-thin 9SCXR</a></li>
<li><a href="#orgf37154e">15. plocate and locate</a></li>
<li><a href="#orgb6a6823">16. How to toggle hide/unhide for an application through keyboard shortcut in bspwm inside Archcraft</a></li>
<li><a href="#org24676aa">17. How to use rsync</a></li>
<li><a href="#orgfdf4f08">18. How to modify drives status</a></li>
<li><a href="#orga2a65c0">19. IDE (Integrate Drive Electronics)</a></li>
<li><a href="#orgba5889f">20. Sound and Video stopped after update of pipewire Archcraft</a></li>
<li><a href="#orgedd2137">21. wireplumber and pipewire-media-session are in conflict in Archcraft</a></li>
<li><a href="#org68908a6">22. rfkill</a></li>
<li><a href="#org3401299">23. failed to commit transaction (conflicting files)</a>
<ul>
<li><a href="#orgb44b608">23.1. Ignore the package which are creating problme</a></li>
<li><a href="#org4954217">23.2. Overwrite files</a></li>
<li><a href="#orgbec9caf">23.3. Check if any pkg owns the file</a></li>
</ul>
</li>
<li><a href="#orgc519084">24. Unhide a window in bspwm in Archcraft</a></li>
<li><a href="#org5bef9ce">25. If pacman package got deleted</a></li>
<li><a href="#orgccd8dde">26. duf (shows about the disk)</a></li>
<li><a href="#orgd76165b">27. Start xfce4-terminal in float mode in Archcraft</a></li>
<li><a href="#org4d9a297">28. git error: unsafe repo</a></li>
<li><a href="#org5cbe1c1">29. Blank screen after boot in Archcraft</a>
<ul>
<li><a href="#org90e34b0">29.1. Arch chroot sanatize it</a></li>
</ul>
</li>
<li><a href="#org59ea26b">30. Additional monitor connection</a></li>
<li><a href="#orgc206664">31. xev</a></li>
<li><a href="#orgfb7baef">32. change ls output color</a></li>
<li><a href="#orgb0fca6b">33. Setup RAG</a></li>
</ul>
</div>
</div>
<p>
#+Created : 07 Jan 24
#+Modified : 26 Apr 24
</p>


<section id="outline-container-org634a182" class="outline-2">
<h2 id="org634a182"><span class="section-number-2">1.</span> Application List</h2>
<div class="outline-text-2" id="text-1">
<table>


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Package</th>
<th scope="col" class="org-left">Command</th>
<th scope="col" class="org-left">Description</th>
<th scope="col" class="org-left">Issue</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">flatpak</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Universal pkg manager</td>
<td class="org-left">&#xa0;</td>
</tr>

<tr>
<td class="org-left">xev</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Gets input device event updates</td>
<td class="org-left">&#xa0;</td>
</tr>

<tr>
<td class="org-left">mons</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Controls secondary monitor</td>
<td class="org-left">&#xa0;</td>
</tr>

<tr>
<td class="org-left">ranger</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">Cmd line file mngr</td>
<td class="org-left">&#xa0;</td>
</tr>
</tbody>
</table>
</div>
</section>

<section id="outline-container-org170310e" class="outline-2">
<h2 id="org170310e"><span class="section-number-2">2.</span> How to install Arch ref guide</h2>
<div class="outline-text-2" id="text-2">
<ol class="org-ol">
<li>Torrent the Arch iso(uncompressed completed image of optical disk)
<ol class="org-ol">
<li>Check the integrity of the downloaded iso by <code>cksum -a sha256 file.iso</code></li>
</ol></li>
<li>Flash the iso into pendrive</li>
<li>Boot into the live arch</li>
<li>Do the partitioning</li>
<li>Mount the partition</li>
<li>Install base linux into the root partitioned
<ol class="org-ol">
<li><code>pacstrap base linux linux-firmware</code></li>
</ol></li>
<li>Arch chroot into the system by <code>arch-chroot</code></li>
<li>Configuration
<ol class="org-ol">
<li>Network
<ul class="org-ul">
<li>Check correct drivers is installed
<ol class="org-ol">
<li><code>lspci | grep network | less</code></li>
<li><code>dmesg | grep firmware</code></li>
</ol></li>
<li>Enale built-in wifi manager iwd
<ol class="org-ol">
<li><code>systemctl enable iwd.service</code></li>
<li><code>systemctl enable systemd-resolved.service</code></li>
<li>Use through <code>iwctl</code></li>
</ol></li>
<li>Make sure there is no conflicting network manager installed</li>
<li><code>/sys/class/net</code>, list of network interface available</li>
</ul></li>
<li>Language
<ol class="org-ol">
<li><code>locale-gen</code></li>
<li>uncomment/write <code>LANG=en_US.UTF-</code> in file <code>/etc/locale.conf</code></li>
</ol></li>
<li><code>/etc/hostname</code></li>
</ol></li>
<li>Restart.</li>
<li>Configure user groups</li>
</ol>
</div>
</section>

<section id="outline-container-org87264fe" class="outline-2">
<h2 id="org87264fe"><span class="section-number-2">3.</span> How to manage <code>.dot</code> files</h2>
<div class="outline-text-2" id="text-3">
<p>
Dot files are simple configuration file that contains rules specific to the program written in a specific protocol as directed by the prgram maintainer.
</p>

<ol class="org-ol">
<li>Create dir <code>dir_name (.dotfiles)</code>, contains all the configuration files.</li>
<li>Create make file <code>makefile</code>, for automation of build process.
<ul class="org-ul">
<li>Make files are used by <code>make</code> command for running set of commands, basically we can automate some repeating and obious commands through it.</li>
<li>Why
<ul class="org-ul">
<li>We have to simlink the files to there actuall location when using it in another system. So either we have to do it manually in which we also have to make sure the files are getting link on correct path. So its better to automate this task with make file.</li>
</ul></li>
</ul></li>
<li><code>mv ~~/.emacs.d/init.el ~~/.dotfiles/</code></li>
<li><code>ln -sf ~/.dotfiles/init.el ~/.emacs.d/init.el</code>, will create a simlink from the <code>~/.dotfiles/init.el</code> to <code>~/.emacs.d/init.el</code>.</li>
<li>Make file automation, to automate the simlink process.</li>
</ol>
<div class="org-src-container">
<pre class="src src-makefile">linkemacsfiles: init.el
mkdir -p ~/.emacs.d/
ln -sf ~/.dotfiles/init.el ~/.emacs.d/init.el
</pre>
</div>
</div>

<div id="outline-container-orgd7791e5" class="outline-3">
<h3 id="orgd7791e5"><span class="section-number-3">3.1.</span> Push to github</h3>
<div class="outline-text-3" id="text-3-1">
<div class="org-src-container">
<pre class="src src-shell">git pull 
git commit -m "Added init.el"
remote add main https://github.com/olfREG314/.dotfiles
git push --set-upstream main master
</pre>
</div>
</div>
</div>
</section>

<section id="outline-container-org797a4fe" class="outline-2">
<h2 id="org797a4fe"><span class="section-number-2">4.</span> How to cofigure clipboard in wayland (Hyprland)</h2>
<div class="outline-text-2" id="text-4">
<p>
Wayland provides support through `wl-copy` &amp; `wl-paste` in package `wl-clipboard`.
Most application by default configured `C+c` `C+v` with system clipboard writing like firefox, Alacritty, etc. But application like vim is not, Vim has multiple clipboard within its application so `yank` `paste` usually do not go directly to system clipboard but to vim inbuilt which is `&ldquo;*` unnamed.
</p>

<p>
But it also provide way to copy to system clipboard throuth `&ldquo;+` unnamedplus.
</p>
<ul class="org-ul">
<li><code>set clipboard=unnamedplus</code>  
<ul class="org-ul">
<li>it will only work in X11 but not in wayland.
<ul class="org-ul">
<li>to configure it in wayland
<ul class="org-ul">
<li>install <code>vim-wayland-clipboard</code></li>
<li><a href="https://github.com/jasonccox/vim-wayland-clipboard">https://github.com/jasonccox/vim-wayland-clipboard</a></li>
</ul></li>
<li><code>copyq</code>: clipboard manager
<ul class="org-ul">
<li><code>exec-once = copyq --start-server</code> : enabling it on statup on Hyprland.</li>
</ul></li>
<li>vim with +clipboard +eval need to be enabled
<ul class="org-ul">
<li>Normal vim installing will not have this enabled.</li>
<li>Installing `gvim` will enable this by default, chek using `vim &#x2013;version`</li>
</ul></li>
</ul></li>
</ul></li>
<li>Ref
<ul class="org-ul">
<li><a href="https://vi.stackexchange.com/questions/84/how-can-i-copy-text-to-the-system-clipboard-from-vim">https://vi.stackexchange.com/questions/84/how-can-i-copy-text-to-the-system-clipboard-from-vim</a></li>
<li><a href="https://wiki.archlinux.org/title/Clipboard">https://wiki.archlinux.org/title/Clipboard</a>&lt;F2&gt;</li>
</ul></li>
</ul>
</div>
</section>

<section id="outline-container-org5608a8f" class="outline-2">
<h2 id="org5608a8f"><span class="section-number-2">5.</span> How to set screen capturing</h2>
<div class="outline-text-2" id="text-5">
<ul class="org-ul">
<li>using <code>grim</code> &amp; <code>slurp</code> - grim for capture in wayland &amp; slurp for region selection
<ul class="org-ul">
<li>configured in Hyprland config -&gt; added sortcut</li>
</ul></li>
</ul>
<div class="org-src-container">
<pre class="src src-conf">bind = $mainMod, p, exec, grim -g "$(slurp -d)" - | wl-copy
bind = $mainMod SHIFT, p, exec, grim 
</pre>
</div>
<ul class="org-ul">
<li>configured in <code>.bashrc</code> -&gt; added env variable
<ul class="org-ul">
<li>export <code>GRIM_DEFAULT_DIR="/home/olfreg314/screenshots/"</code></li>
</ul></li>
</ul>
</div>
</section>

<section id="outline-container-org16dddf6" class="outline-2">
<h2 id="org16dddf6"><span class="section-number-2">6.</span> How to convert from .md to .org</h2>
<div class="outline-text-2" id="text-6">
<div class="org-src-container">
<pre class="src src-shell">find . -name \*.txt -type f -exec pandoc  -f markdown -t org -o {}.org {} \; 

# For single file
pandoc -f markdown -t org -o newfile.org original-file.markdown` - for single file
</pre>
</div>
<ul class="org-ul">
<li>Ref - <a href="https://emacs.stackexchange.com/questions/5465/how-to-migrate-markdown-files-to-emacs-org-mode-format?newreg=e7a7418622254c10bdeb95f048e3e151">https://emacs.stackexchange.com/questions/5465/how-to-migrate-markdown-files-to-emacs-org-mode-format?newreg=e7a7418622254c10bdeb95f048e3e151</a></li>
</ul>
</div>
</section>

<section id="outline-container-org749b84c" class="outline-2">
<h2 id="org749b84c"><span class="section-number-2">7.</span> How to change escape key to other key in Archcraft</h2>
<div class="outline-text-2" id="text-7">
<p>
Modify the file <code>~/usr/share/X11/xkb/keycodes/evdev</code>
</p>
<div class="org-src-container">
<pre class="src src-conf">&lt;ESC&gt; = 95;
</pre>
</div>

<p>
Multiple code assigning to a keyname is not possible nut can be possible through scripts&#x2026; but below is better ways
Add to <code>.bashrc</code> or <code>.zshrc</code> or <code>.profile</code> or whatever script runs first.
</p>
<div class="org-src-container">
<pre class="src src-conf">xmodmap -e 'keycode 95=Escape'
</pre>
</div>

<p>
Ref - <a href="https://askubuntu.com/a/1070882">https://askubuntu.com/a/1070882</a>
</p>
</div>
</section>

<section id="outline-container-org5464ed3" class="outline-2">
<h2 id="org5464ed3"><span class="section-number-2">8.</span> REVISION Unexpected crash shutdown in Archcraft</h2>
<div class="outline-text-2" id="text-8">
<dl class="org-dl">
<dt>Systemd</dt><dd>Provides a system and service manager that runs as PID 1 &amp; starts the rest of the system.
<ul class="org-ul">
<li>Includes a logging daemon, utilities to control basic system configuration like hostname, date, locale.</li>
<li>Maintains a list of logged-in users and running containers and virtual machines, system accounts, runtime dir and settings and daemons to manage simple network configuration, netword time resolution, log forwarding, and name resolution.</li>
</ul></dd>
<dt>systemctl</dt><dd>controls systemd daemons and service manager.</dd>
</dl>
</div>
</section>

<section id="outline-container-org063c312" class="outline-2">
<h2 id="org063c312"><span class="section-number-2">9.</span> xbacklight not working in Archcraft</h2>
<div class="outline-text-2" id="text-9">
<p>
Install <code>acpilight</code>  
</p>

<p>
Ref - <a href="https://askubuntu.com/questions/715306/xbacklight-no-outputs-have-backlight-property-no-sys-class-backlight-folder">https://askubuntu.com/questions/715306/xbacklight-no-outputs-have-backlight-property-no-sys-class-backlight-folder</a>
</p>
</div>
</section>

<section id="outline-container-org82c7f50" class="outline-2">
<h2 id="org82c7f50"><span class="section-number-2">10.</span> optimus-manager causing screen tearing in Archcraft</h2>
<div class="outline-text-2" id="text-10">
<p>
Installing <code>optimus-manager</code> results in archcraft to screen tearing.
</p>

<ul class="org-ul">
<li>Modify <code>/etc/X11/xorg.conf.d/10-optimus-manager.conf</code></li>
</ul>
<div class="org-src-container">
<pre class="src src-conf">Section "Device"
Identifier "intel"
Driver "modesetting"
BusID "PCI:0:2:0"
Option "DRI" "3"
Option "TearFree" "true"
EndSection
</pre>
</div>

<ul class="org-ul">
<li>Modify <code>/etc/X11/xorg.conf.d/20-intel.conf</code></li>
</ul>
<div class="org-src-container">
<pre class="src src-conf">Section "Device"
Identifier "Intel Graphics"
Driver "intel"
Option "AccelMethod" "sna"
Option "DRI" "3"
Option "TearFree" "true"
EndSection
</pre>
</div>

<ul class="org-ul">
<li><p>
Modify <code>.config/bspwm/picom.conf</code>
</p>
<div class="org-src-container">
<pre class="src src-conf">backend = "glx";
</pre>
</div></li>

<li>Ref - <a href="https://www.youtube.com/watch?v=GWQh_DmDLKQ">https://www.youtube.com/watch?v=GWQh_DmDLKQ</a></li>
</ul>
</div>
</section>

<section id="outline-container-orgf19df07" class="outline-2">
<h2 id="orgf19df07"><span class="section-number-2">11.</span> How to get temperature record in Archcraft</h2>
<div class="outline-text-2" id="text-11">
<p>
<code>sensors</code> provides all the temperatures.
</p>
<pre class="example" id="org85b598c">
coretemp-isa-0000
Adapter: ISA adapter
Package id 0:  +52.0°C  (high = +100.0°C, crit = +100.0°C)
Core 0:        +45.0°C  (high = +100.0°C, crit = +100.0°C)
Core 1:        +46.0°C  (high = +100.0°C, crit = +100.0°C)
Core 2:        +47.0°C  (high = +100.0°C, crit = +100.0°C)
Core 3:        +52.0°C  (high = +100.0°C, crit = +100.0°C)

pch_cannonlake-virtual-0
Adapter: Virtual device
temp1:        +65.0°C

BAT1-acpi-0
Adapter: ACPI interface
in0:          12.77 V
curr1:         0.00 A

iwlwifi_1-virtual-0
Adapter: Virtual device
temp1:        +44.0°C

nvme-pci-0200
Adapter: PCI adapter
Composite:    +39.9°C  (low  = -20.1°C, high = +84.8°C)
(crit = +89.8°C)

acpitz-acpi-0
Adapter: ACPI interface
temp1:        +48.0°C  (crit = +100.0°C)
</pre>

<p>
<code>for i in /sys/class/thermal/thermal_zone*; do echo "$i: $(&lt;$i/type)"; done</code>  
</p>
<pre class="example" id="orgb26baf0">
/sys/class/thermal/thermal_zone0: acpitz
/sys/class/thermal/thermal_zone1: pch_cannonlake
/sys/class/thermal/thermal_zone2: iwlwifi_1
/sys/class/thermal/thermal_zone3: x86_pkg_temp
</pre>

<p>
<code>for i in /sys/class/hwmon/hwmon*/temp*_input; do echo "$(&lt;$(dirname $i)/name): $(cat ${i%_*}_label 2&gt;/dev/null || echo $(basename ${i%_*})) $(readlink -f $i)"; done</code>
</p>
<pre class="example" id="orgdaced62">
acpitz: temp1 /sys/devices/virtual/thermal/thermal_zone0/hwmon1/temp1_input
nvme: Composite /sys/devices/pci0000:00/0000:00:1d.0/0000:02:00.0/nvme/nvme0/hwmon3/temp1_input
pch_cannonlake: temp1 /sys/devices/virtual/thermal/thermal_zone1/hwmon4/temp1n_input
iwlwifi_1: temp1 /sys/devices/virtual/thermal/thermal_zone2/hwmon5/temp1_input
coretemp: Package id 0 /sys/devices/platform/coretemp.0/hwmon/hwmon6/temp1_input
coretemp: Core 0 /sys/devices/platform/coretemp.0/hwmon/hwmon6/temp2_input
coretemp: Core 1 /sys/devices/platform/coretemp.0/hwmon/hwmon6/temp3_input
coretemp: Core 2 /sys/devices/platform/coretemp.0/hwmon/hwmon6/temp4_input
coretemp: Core 3 /sys/devices/platform/coretemp.0/hwmon/hwmon6/temp5_input
</pre>
</div>
</section>

<section id="outline-container-org4e6b644" class="outline-2">
<h2 id="org4e6b644"><span class="section-number-2">12.</span> How to customize touchpad to work on firefox</h2>
<div class="outline-text-2" id="text-12">
<dl class="org-dl">
<dt><code>xinput</code></dt><dd>List available input devices, query info, change input settings.</dd>
<dt>libinput</dt><dd>Handle input devices, device detection, input even processing for wayland &amp; Xorg <code>x86-input-libinput</code> driver.</dd>
<dt>libinput-gestures</dt><dd>configure trackpad gestures through <code>xdotool</code> and for wayland <code>wtype</code>.
<ul class="org-ul">
<li><code>libinput-gestures-setup start</code>
<ul class="org-ul">
<li>If unable to start <code>libinput-gestures failed to start as a desktop application.</code>
<ul class="org-ul">
<li><code>sudo gpasswd -a $USER input</code></li>
</ul></li>
<li><code>newgrp input</code>
<dl class="org-dl">
<dt>newgrp</dt><dd>The same person remains logged in and the current dir is unchanged, but calculations of access permission to files are performed with respect to the new ID.</dd>
</dl></li>
</ul></li>
</ul></dd>
</dl>
<ul class="org-ul">
<li>Copy the config <code>rsync -avP /etc/libinput-gestures.conf ~/.config/</code>  
<ul class="org-ul">
<li><p>
Modify the file 
</p>
<div class="org-src-container">
<pre class="src src-conf">gesture swipe right 3 xdotool key control+Tab
gesture swipe left 3 xdotool key control+shift+Tab
</pre>
</div></li>
</ul></li>
</ul>
</div>
</section>

<section id="outline-container-orgb03f23d" class="outline-2">
<h2 id="orgb03f23d"><span class="section-number-2">13.</span> Security tools</h2>
<div class="outline-text-2" id="text-13">
<dl class="org-dl">
<dt>lynis</dt><dd>Security auditing tool. Checks system and the software configuration.
<ul class="org-ul">
<li><code>lynis audit system -Q</code></li>
<li id="Ref"><a href="https://cisofy.com/lynis/">https://cisofy.com/lynis/</a></li>
</ul></dd>
<dt>rkhunter</dt><dd>Checks machines for the presence of rootkits and other unwanted tools.
<ul class="org-ul">
<li><code>rkhunter --propupd</code> Updates file properties database.</li>
<li><code>rkhunter --sk</code> run system check</li>
</ul></dd>
</dl>
</div>
</section>

<section id="outline-container-org98cc8de" class="outline-2">
<h2 id="org98cc8de"><span class="section-number-2">14.</span> Custom fan control in MSI GF63-thin 9SCXR</h2>
<div class="outline-text-2" id="text-14">
<dl class="org-dl">
<dt>isw</dt><dd>Custom fan control modification for different msi laptop.</dd>
<dt>(no term)</dt><dd><code>isw -b on</code> cooler booster on/off toggle.</dd>
<dt>(no term)</dt><dd><code>/etc/isw.conf</code></dd>
<dt>(no term)</dt><dd>Ref
<ul class="org-ul">
<li><a href="https://github.com/YoyPa/isw/wiki/How-to-configure-ec_sys-with-write_support=1">https://github.com/YoyPa/isw/wiki/How-to-configure-ec_sys-with-write_support=1</a></li>
<li><a href="https://github.com/YoyPa/isw">https://github.com/YoyPa/isw</a></li>
</ul></dd>
</dl>
</div>
</section>

<section id="outline-container-orgf37154e" class="outline-2">
<h2 id="orgf37154e"><span class="section-number-2">15.</span> plocate and locate</h2>
<div class="outline-text-2" id="text-15">
<p>
Find all the files on the system matching the given pattern.
Similar to <code>mlocate</code> but faster.
</p>

<dl class="org-dl">
<dt><code>updatedb</code></dt><dd>updates the files index from which plocate searches.</dd>
<dt>(no term)</dt><dd><p>
Modify <code>/etc/updatedb.conf</code> for specifing which file updatedb should not scan.
</p>
<pre class="example">
PRUNEPATHS = "/afs /media /mnt /net /sfs /tmp"
</pre></dd>
<dt>(no term)</dt><dd><code>plocate --ignore-case --database path_for_custom_index_db file_name</code></dd>
<dt>(no term)</dt><dd>Default db <code>/var/lib/plocate/plocate.db</code></dd>
</dl>
</div>
</section>

<section id="outline-container-orgb6a6823" class="outline-2">
<h2 id="orgb6a6823"><span class="section-number-2">16.</span> How to toggle hide/unhide for an application through keyboard shortcut in bspwm inside Archcraft</h2>
<div class="outline-text-2" id="text-16">
<ul class="org-ul">
<li>Create script <code>touch scratchpad.sh</code></li>
<li>Change mode <code>chmod -x</code> to executable</li>
<li><p>
Modify <code>scratchpad.sh</code> 
</p>
<div class="org-src-container">
<pre class="src src-shell">#!/usr/bin/zsh

# Check if application name provided or not
# -z returns true if $1 is empty
# Run sh scratchpad.sh application_name
# $0 contains scratchpad.sh $1 contains application_name
if [ -z $1 ]; then
echo "usage: $0 name_of_hidden_scratchpad_window"
exit 1
fi

# Find all process id of the application_name
# xdotool searches all the window in bspwm like window title, size, etc.
# search for window with title, names, classes with regex pattern
# Search the pid of the running application that has a visible window
# xdotool search --class --onlyvisible application_name
pids = $(xdotool search --class ${1})

# Toggle hidden for every window of given pids
# --flag hidden toggles hidden property
for pid in $pids; do
echo "Toggle $pid"
bspc node $pid --flag hidden --to-desktop focused -f
done 
</pre>
</div></li>
<li><p>
Modify sxhkdrc
</p>
<pre class="example">
super + slash
sh ~/scratchpad.sh application_name
</pre></li>
<li>Ref - <a href="https://wiki.archlinux.org/title/Bspwm">https://wiki.archlinux.org/title/Bspwm</a></li>
</ul>
</div>
</section>

<section id="outline-container-org24676aa" class="outline-2">
<h2 id="org24676aa"><span class="section-number-2">17.</span> How to use rsync</h2>
<div class="outline-text-2" id="text-17">
<p>
Remote &amp; local file copying tool.
<code>rsync -avP from to</code> :: -a recursion &amp; preserve everything, -v verbose, -P progress
</p>
</div>
</section>

<section id="outline-container-orgfdf4f08" class="outline-2">
<h2 id="orgfdf4f08"><span class="section-number-2">18.</span> How to modify drives status</h2>
<div class="outline-text-2" id="text-18">
<p>
<code>udiskstool</code>
</p>
<ul class="org-ul">
<li><code>unmount -v /dev/block_name</code></li>
<li><code>power-off -b /dev/block_name</code></li>
</ul>

<p>
<code>hdparm</code> :: get/set SATA/IDE (Integrate Drive Electronics, ATA ) parameter
</p>
<dl class="org-dl">
<dt><code>-y /dev/block</code></dt><dd>force IDE into low power consumption (standby mode)</dd>
<dt>-Y</dt><dd>force into lowest power mode</dd>
<dt>-C</dt><dd>current power mode</dd>
</dl>

<p>
<code>sync</code> sync chached writes to persistent storage
</p>
<ul class="org-ul">
<li>flush all the buffers to disk. It will ensure that no data is lingering in ram.</li>
</ul>

<p>
<code>gnome-disks</code> :: GUI util for disks
</p>

<p>
Ref - <a href="https://askubuntu.com/questions/586657/is-there-any-way-to-turn-off-a-usb-hdd-manually">https://askubuntu.com/questions/586657/is-there-any-way-to-turn-off-a-usb-hdd-manually</a>
</p>
</div>
</section>

<section id="outline-container-orga2a65c0" class="outline-2">
<h2 id="orga2a65c0"><span class="section-number-2">19.</span> IDE (Integrate Drive Electronics)</h2>
<div class="outline-text-2" id="text-19">
<p>
Electronic interface standard that defines the connection between a bus on a computer&rsquo;s motherboard and the computer&rsquo;s disk storage devices.
</p>
</div>
</section>

<section id="outline-container-orgba5889f" class="outline-2">
<h2 id="orgba5889f"><span class="section-number-2">20.</span> Sound and Video stopped after update of pipewire Archcraft</h2>
<div class="outline-text-2" id="text-20">
<p>
Do not run pulseaudio and pipewire that lead to conflict.
Solves by removing one the packages.
</p>

<dl class="org-dl">
<dt><code>pactl</code></dt><dd>control a running pulseaudio sound server.
<dl class="org-dl">
<dt>info</dt><dd>check if pipewire is activated.</dd>
<dt>(no term)</dt><dd><p>
if active 
</p>
<pre class="example" id="orga28d21f">
Server Name: PulseAudio (on PipeWire 0.3.53)
</pre></dd>
<dt>(no term)</dt><dd><p>
otherwise
</p>
<pre class="example" id="org7d46bc1">
PluseAudio
</pre></dd>
</dl></dd>
<dt>(no term)</dt><dd>Ref - <a href="https://askubuntu.com/questions/1333404/how-to-replace-pulseaudio-with-pipewire-on-ubuntu-21-04">https://askubuntu.com/questions/1333404/how-to-replace-pulseaudio-with-pipewire-on-ubuntu-21-04</a></dd>

<dt><code>systemctl --user mask pulseaudio</code></dt><dd>link these to <code>/dev/null</code>
<ul class="org-ul">
<li>prohibits all kinds of activation.</li>
<li>mask temporarily until nxt reboot.</li>
</ul></dd>
<dt><code>aplay</code></dt><dd>arecord, cmd-line sound recorder and player for ALSA soundcard driver.
<ul class="org-ul">
<li><code>-l</code> list all soundcards and digital audio devices.</li>
<li><code>-L</code> list all PCMs (pulse code modulation) defined.</li>
</ul></dd>
<dt><code>alsactl</code></dt><dd>advanced setting for ALSA soundcard drivcer. Controller for the card&rsquo;s feature.
<ul class="org-ul">
<li><code>init</code> initializes all devices to a default state. Returns code 99 if device not found.</li>
</ul></dd>
<dt><code>pulseaudio -k</code></dt><dd>restart pulseaudio</dd>
<dt>(no term)</dt><dd>Ref
<ul class="org-ul">
<li><a href="https://bbs.archlinux.org/viewtopic.php?id=237364">https://bbs.archlinux.org/viewtopic.php?id=237364</a></li>
<li><a href="https://wiki.archlinux.org/title/PipeWire">https://wiki.archlinux.org/title/PipeWire</a></li>
<li><a href="https://ubuntuhandbook.org/index.php/2022/04/pipewire-replace-pulseaudio-ubuntu-2204/">https://ubuntuhandbook.org/index.php/2022/04/pipewire-replace-pulseaudio-ubuntu-2204/</a></li>
</ul></dd>
</dl>
</div>
</section>

<section id="outline-container-orgedd2137" class="outline-2">
<h2 id="orgedd2137"><span class="section-number-2">21.</span> wireplumber and pipewire-media-session are in conflict in Archcraft</h2>
<div class="outline-text-2" id="text-21">
<p>
Audio and video all will stop being played.
Just removes one of it.
pipewire-media-session is simple session manager.
While pipewire is multimedia framework.
</p>
</div>
</section>

<section id="outline-container-org68908a6" class="outline-2">
<h2 id="org68908a6"><span class="section-number-2">22.</span> rfkill</h2>
<div class="outline-text-2" id="text-22">
<p>
Tool for enabling/disabling wireless devices.
<code>rfkill list</code> :: list all wireless device.
</p>
</div>
</section>

<section id="outline-container-org3401299" class="outline-2">
<h2 id="org3401299"><span class="section-number-2">23.</span> failed to commit transaction (conflicting files)</h2>
<div class="outline-text-2" id="text-23">
<p>
The problem will appear when some package are updated maually without using package manager like <code>npm update</code>.
Pacman keeps track of installed package and by udpating manually a package, pacman get conflict.
</p>
</div>

<div id="outline-container-orgb44b608" class="outline-3">
<h3 id="orgb44b608"><span class="section-number-3">23.1.</span> Ignore the package which are creating problme</h3>
<div class="outline-text-3" id="text-23-1">
<p>
<code>pacman -Syu --ignore=npm</code> :: udpate every pkg except &rsquo;npm&rsquo;
<code>pacman -Syu --ignoregroup=plasma-desktop</code>
</p>

<p>
Permanentally ignoring a package
<code>/etc/pacman.conf</code>
</p>
<div class="org-src-container">
<pre class="src src-conf">IgnorePkg=npm
</pre>
</div>
</div>
</div>

<div id="outline-container-org4954217" class="outline-3">
<h3 id="org4954217"><span class="section-number-3">23.2.</span> Overwrite files</h3>
<div class="outline-text-3" id="text-23-2">
<p>
<code>pacman -S pkg_name --overwrite '*'</code>
</p>
<dl class="org-dl">
<dt><code>'*'</code></dt><dd>overwrites everyfile</dd>
<dt><code>/path/to/*</code></dt><dd>a specific file</dd>
</dl>
</div>
</div>

<div id="outline-container-orgbec9caf" class="outline-3">
<h3 id="orgbec9caf"><span class="section-number-3">23.3.</span> Check if any pkg owns the file</h3>
<div class="outline-text-3" id="text-23-3">
<ul class="org-ul">
<li><code>pacman -Qo /path/to/file</code></li>
<li>if identifies config pkg
<ul class="org-ul">
<li><code>pacman -R pkg</code></li>
</ul></li>
<li>if no pkg identifies it
<ul class="org-ul">
<li><code>rm /path/to/file</code> or move the file to backup if something get worng</li>
</ul></li>
</ul>
</div>
</div>
</section>

<section id="outline-container-orgc519084" class="outline-2">
<h2 id="orgc519084"><span class="section-number-2">24.</span> Unhide a window in bspwm in Archcraft</h2>
<div class="outline-text-2" id="text-24">
<div class="org-src-container">
<pre class="src src-shell"># Get a list of hidden window
bspc query -N -n .hidden
</pre>
</div>
<div class="org-src-container">
<pre class="src src-shell">bspc node $(bspc quey -N -n .hidden | tail -n1) -g hidden=off)
</pre>
</div>
</div>
</section>

<section id="outline-container-org5bef9ce" class="outline-2">
<h2 id="org5bef9ce"><span class="section-number-2">25.</span> If pacman package got deleted</h2>
<div class="outline-text-2" id="text-25">
<p>
Let say <code>/usr/share/fonts</code> got deleted
</p>
<div class="org-src-container">
<pre class="src src-shell">pacman -Qqo /usr/share/fonts | sudo pacman -S -
</pre>
</div>
<dl class="org-dl">
<dt><code>Q</code></dt><dd>query the installed pkg</dd>
<dt>q</dt><dd>dont print the pkg version, just name</dd>
<dt>o</dt><dd>own get every pkg that has (or had) a file <code>/usr/share/fonts</code></dd>
<dt>|</dt><dd>piping</dd>
<dt>-S</dt><dd>install pkg</dd>
<dt>-</dt><dd>a single dash tells pacman to read pkg list from stdin</dd>
</dl>
</div>
</section>

<section id="outline-container-orgccd8dde" class="outline-2">
<h2 id="orgccd8dde"><span class="section-number-2">26.</span> duf (shows about the disk)</h2>
</section>
<section id="outline-container-orgd76165b" class="outline-2">
<h2 id="orgd76165b"><span class="section-number-2">27.</span> Start xfce4-terminal in float mode in Archcraft</h2>
<div class="outline-text-2" id="text-27">
<p>
<code>~/.config/bspwm/bspwmrc</code>
</p>
<div class="org-src-container">
<pre class="src src-shell">bspc rule -a Xfce-teminal state=floating sticy-on
# make sure application name starts with capital letter
</pre>
</div>
<p>
<code>/.config/sxhdkrc/sxhkdrc</code> 
</p>
<pre class="example">
super + period
xfce-terminal --drop-down
</pre>
<p>
Edit xfce terminal setting to position it and other stuff.
</p>

<ul class="org-ul">
<li><p>
Does not work this way
</p>
<pre class="example">
super + period
bspc rule -a \* -o state=floating sticky=on
</pre></li>
<li>Ref
<ul class="org-ul">
<li><a href="https://github.com/kamranahmedse/pennywise">https://github.com/kamranahmedse/pennywise</a></li>
<li><a href="https://fsylum.net/blog/setting-up-persistent-floating-browser-window-bspwm/">https://fsylum.net/blog/setting-up-persistent-floating-browser-window-bspwm/</a></li>
</ul></li>
</ul>
</div>
</section>

<section id="outline-container-org4d9a297" class="outline-2">
<h2 id="org4d9a297"><span class="section-number-2">28.</span> git error: unsafe repo</h2>
<div class="outline-text-2" id="text-28">
<blockquote>
<p>
fatal: Not a git repository (or any of the parent directories): .git
</p>
</blockquote>
<blockquote>
<p>
Error: Command failed: git add -A
fatal: unsafe repository (&rsquo;<i>mnt</i>&#x2026;&#x2026;.&rsquo; is owned by someone else)
To add an exception for this directory, call:
git config &#x2013;global &#x2013;add safe.directory <i>mnt</i>&#x2026;&#x2026;&#x2026;
</p>
</blockquote>

<p>
Git patch a vulnerablity which are exploiting shared memory location. Which is applicable on multi user machine.
Ref
</p>
<ul class="org-ul">
<li><a href="https://github.blog/2022-04-12-git-security-vulnerability-announced/">https://github.blog/2022-04-12-git-security-vulnerability-announced/</a></li>
<li><a href="https://stackoverflow.com/questions/71901632/fatal-error-unsafe-repository-home-repon-is-owned-by-someone-else">https://stackoverflow.com/questions/71901632/fatal-error-unsafe-repository-home-repon-is-owned-by-someone-else</a></li>
</ul>

<p>
<code>git config --global --add safe.directory dir_path</code>  
</p>
</div>
</section>


<section id="outline-container-org5cbe1c1" class="outline-2">
<h2 id="org5cbe1c1"><span class="section-number-2">29.</span> Blank screen after boot in Archcraft</h2>
<div class="outline-text-2" id="text-29">
<pre class="example" id="org3275df3">
running hook[udev]
triggering uevents
running hook [keymap]
loading keymap... done
running hook[plymouth]
performing fsck on '/dev/nvme0n1p8'
arch_root: recovering journal
arch_root:clean, 472471/1966080 files, 4306229/7864320 blocks
mounting '/dev/nvme0n1p8' on real root
running cleanup hook [udev]
ERROR: Root device mounted successfully, but /sbin/init does not exist.
Bailing out, you are on your own. Good luck.
sh:can't access tty; job control turned off
[rootfs ]#
</pre>
</div>

<div id="outline-container-org90e34b0" class="outline-3">
<h3 id="org90e34b0"><span class="section-number-3">29.1.</span> Arch chroot sanatize it</h3>
<div class="outline-text-3" id="text-29-1">
<ul class="org-ul">
<li>Create live usb and boot</li>
<li>Get root partition of broken arch</li>
<li><code>arch-chroot /mnt</code> into the system</li>
<li><code>df -h</code> list all the system files by default
<ul class="org-ul">
<li>may have to edit symlink if required system file are in diff. dir.</li>
</ul></li>
<li><code>sudo pacman -Syyu</code></li>
<li><code>ln -sf /usr/sbin/init /sbin/init</code>
<ul class="org-ul">
<li><code>sbin/init -&gt; ../lib/systemd/systemd</code> try to create this link</li>
</ul></li>
<li><code>mkinitcpio -p linux</code> create inital ramdisk env.
<ul class="org-ul">
<li><code>-p</code> according to specified preset located in <code>/etc/mkinitcpio.d</code></li>
</ul></li>
<li><code>locale-gen</code> generate locatlisation file</li>
</ul>
</div>
</div>
</section>

<section id="outline-container-org59ea26b" class="outline-2">
<h2 id="org59ea26b"><span class="section-number-2">30.</span> Additional monitor connection</h2>
<div class="outline-text-2" id="text-30">
<dl class="org-dl">
<dt>xrandr</dt><dd>responsible for displaying stuff
<ul class="org-ul">
<li><code>xrandr --output "HDMI-2" --auto</code> start rendering on second monitor</li>
</ul></dd>
<dt>autorandr</dt><dd>automatically select a display config based on connected devices</dd>
<dt>mons</dt><dd>manage 2 monitor display</dd>
<dt>ARandR</dt><dd><p>
for setting screen resolution
<code>~/.config/sxhkd/sxhkdrc</code>  
</p>
<div class="org-src-container">
<pre class="src src-conf">super + shift + {Prior, Next}
bspc node -m {prev, next} --follow
</pre>
</div></dd>
</dl>
</div>
</section>

<section id="outline-container-orgc206664" class="outline-2">
<h2 id="orgc206664"><span class="section-number-2">31.</span> xev</h2>
<div class="outline-text-2" id="text-31">
<p>
Input device even listner
</p>
</div>
</section>

<section id="outline-container-orgfb7baef" class="outline-2">
<h2 id="orgfb7baef"><span class="section-number-2">32.</span> change ls output color</h2>
<div class="outline-text-2" id="text-32">
<p>
<code>LS_COLORS='ow=1;4;95:'</code>
</p>
<ul class="org-ul">
<li>setting ow (other write permission) 1-bold, 4-underline, 95-lightpurple</li>
<li>Print all <code>ls -color</code> config
<ul class="org-ul">
<li><code>dircolors</code></li>
</ul></li>
<li>Ref - <a href="https://askubuntu.com/questions/466198/how-do-i-change-the-color-for-directories-with-ls-in-the-console">https://askubuntu.com/questions/466198/how-do-i-change-the-color-for-directories-with-ls-in-the-console</a></li>
<li><div class="org-src-container">
<pre class="src src-ascii">| Code Color         | Code Color                    | StyleCode Style                                                |
|--------------------+-------------------------------+----------------------------------------------------------------|
| 31 = red          | 40 = black background        | 0 = default colour                                           |
| 32 = green        | 41 = red background          | 1 = bold                                                     |
| 33 = orange       | 42 = green background        | 4 = underlined                                               |
| 34 = blue         | 43 = orange background       | 5 = flashing text                                            |
| 35 = purple       | 44 = blue background         | 7 = reverse field (exchange foreground and background color) |
| 36 = cyan         | 45 = purple background       | 8 = concealed (invisible)                                    |
| 37 = grey         | 46 = cyan background         |                                                                |
| 90 = dark grey    | 47 = grey background         |                                                                |
| 91 = light red    | 100 = dark grey background    |                                                                |
| 92 = light green  | 101 = light red background    |                                                                |
| 93 = yellow       | 102 = light green background  |                                                                |
| 94 = light blue   | 103 = yellow background       |                                                                |
| 95 = light purple | 104 = light blue background   |                                                                |
| 96 = turquoise    | 105 = light purple background |                                                                |
| 97 = white        | 106 = turquoise background    |                                                                |
|                    | 107 = white background        |                                                                |
</pre>
</div></li>
</ul>
</div>
</section>





<section id="outline-container-orgb0fca6b" class="outline-2">
<h2 id="orgb0fca6b"><span class="section-number-2">33.</span> Setup RAG</h2>
</section>
 </template>
