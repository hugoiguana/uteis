install:
	make db-postgres-install
	make db-mysql-install
	make db-cassandra-install

uninstall:
	make db-postgres-uninstall
	make db-mysql-uninstall
	make db-cassandra-uninstall

db-postgres-install:
	docker compose up -d --build db-postgres
db-postgres-uninstall:
	docker stop db-postgres && docker rm db-postgres && docker volume rm databases_db-postgres-volume
db-postgres-start:
	docker start db-postgres
db-postgres-stop:
	docker stop db-postgres

db-mysql-install:
	docker compose up -d --build db-mysql
db-mysql-uninstall:
	docker stop db-mysql && docker rm db-mysql && docker volume rm databases_db-mysql-volume
db-mysql-start:
	docker start db-mysql
db-mysql-stop:
	docker stop db-mysql


db-cassandra-install:
	docker compose up -d --build db-cassandra
db-cassandra-uninstall:
	docker stop db-cassandra && docker rm db-cassandra && docker volume rm databases_db-cassandra-volume
db-cassandra-start:
	docker start db-cassandra
db-cassandra-stop:
	docker stop db-cassandra