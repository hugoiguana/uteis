install:
	make db-postgres-install
	make db-cassandra-install

db-postgres-install:
	docker compose up -d --build db-postgres
db-postgres-uninstall:
	docker stop db-postgres && docker rm db-postgres && docker volume rm databases_db-postgres-volume
db-postgres-start:
	docker start db-postgres
db-postgres-stop:
	docker stop db-postgres


db-cassandra-install:
	docker compose up -d --build db-cassandra
db-cassandra-start:
	docker start db-cassandra
db-cassandra-stop:
	docker stop db-cassandra
db-cassandra-uninstall:
	docker stop db-cassandra && docker rm db-cassandra && docker volume rm databases_db-cassandra-volume