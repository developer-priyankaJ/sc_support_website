#/bin/bash

echo "done"
cp -R /home/support/public_html/website/build/ScopehubDcos/* /home/support/public_html/
chown support.support /home/support/public_html/ -R
# rm -rf /home/support/public_html/website/build/ScopehubDcos