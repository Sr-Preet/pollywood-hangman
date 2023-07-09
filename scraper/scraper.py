import re
import os
import json
import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv

load_dotenv()

page_num = 1
movie_ids = []
movie_data = []

api_key = 'YOUR_API_KEY'  # Replace with your OMDb API key

response = requests.get("https://www.imdb.com/list/ls066141330").text

soup = BeautifulSoup(response, 'html.parser')

title_elements = soup.find_all("h3", class_="lister-item-header")

for title_element in title_elements:
    href = title_element.a["href"]
    movie_id = href.split("/")[2].split("tt")[1]
    movie_ids.append(movie_id)

for movie_id in movie_ids:
    url = f"http://www.omdbapi.com/?i=tt{movie_id}&apikey={api_key}"
    movie_json = requests.get(url).json()
    movie_json['imdbID'] = f"tt{movie_id}"
    movie_data.append(movie_json)

# Filter movie_data based on language

print(movie_data)
movie_data = [movie for movie in movie_data if "Punjabi" in movie.get("Language", "")]

# Converts to JSON and writes to file
with open('movie_data.json', 'w') as f:
    json.dump(movie_data, f)
