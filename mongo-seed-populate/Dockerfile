FROM mongo

COPY init.json /init.json
CMD mongoimport --host mongodb --db MyDatabase --collection MyCollection --type json --file /init.json --jsonArray