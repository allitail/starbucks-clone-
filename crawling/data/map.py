from bs4 import BeautifulSoup 
from selenium import webdriver
import csv
import time 
driver = webdriver.Chrome('./crawling/data/chromedriver') 
driver.get('https://www.starbucks.co.kr/store/store_map.do?disp=locale') 
time.sleep(20)

