import pandas as pd
from pymongo import MongoClient

# Connection details
mongo_host = 'your_host'
mongo_port = 27017
db_name = 'your_database'
collection_name = 'your_collection'
username = 'root'
password = 'examplepassword'

# Read CSV file using pandas
csv_file_path = 'Alaska-data1(part1).csv'
df = pd.read_csv(csv_file_path)

# Create a connection to MongoDB
client = MongoClient(f'mongodb://{username}:{password}@{mongo_host}:{mongo_port}/')
db = client[db_name]

# Insert data from DataFrame to MongoDB collection
db[collection_name].insert_many(df.to_dict('records'))

print("CSV data uploaded to MongoDB collection.")
