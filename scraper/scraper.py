import re
import os
import json
import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv

# * last scraped on December 27, 2020

load_dotenv()

page_num = 1
movie_ids = []
movie_data = []

api_key = ''

response = requests.get(
        f"https://www.imdb.com/list/ls066141330").text

soup = BeautifulSoup(response, 'html.parser')
titles = soup.select('#main > div > div.lister.list.detail.sub-list > div.lister-list > div:nth-child(1) > div.lister-item-content > h3 > a')

print(titles)

for title in titles:
    # extracts IMDb ID
    regex = re.search("tt\S{7}", str(title))
    movie_ids.append(regex.group(0))

print(1, movie_ids)

# # scrapes for json movie data
# for movie_id in movie_ids:
#     url = f"http://www.omdbapi.com/?i={movie_id}&apikey={api_key}"
#     movie_json = requests.get(url).json()

#     movie_json['imdbID'] = movie_id
#     movie_data.append(movie_json)
#     movie_data = list(filter(lambda movie_json: "Hindi" in movie_json["Language"], movie_data))


# # converts to JSON and writes to file
# with open('movie_data.json', 'w') as f:
#     json.dump(movie_data, f)
