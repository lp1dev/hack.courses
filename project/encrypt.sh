password="P @ s s w 0 r d 1 2 3"
password=$(echo $password | rev) 
#echo $password | rev

for l in $password;do
    echo -n $(echo $l | hexdump | head -n 1 | cut -d ' ' -f 2) ""
done
