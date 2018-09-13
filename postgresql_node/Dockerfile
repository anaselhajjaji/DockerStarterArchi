FROM library/postgres
# Copy the sql file for the datbase initialization in '/docker-entrypoint-initdb.d/'
# The script will be executed automatically at container startup
COPY initdb.sql /docker-entrypoint-initdb.d/