# Расширение для взаимодействия с jupyter-notebook встроенного в iframe.
---
## 1. Установить расширение [jupyter_contrib_nbextensions](https://github.com/ipython-contrib/jupyter_contrib_nbextensions)

#### 1. Установить python пакет
```sh
pip install jupyter_contrib_nbextensions
```
#### 2. Установить javascript и css файлы
```sh
jupyter contrib nbextension install --user
```
#### 3. Включение расширения nbextension
```sh
jupyter nbextension enable codefolding/main
```
---
## 2. Установка своего расширения 
### 1. Найти расположение папки nbextensions
```sh
pip show jupyter_contrib_nbextensions
```
Местоположение расширений будет примерно таким
```/Users/username/anaconda3/envs/jupyterexperiments/lib/python3.7/site-packages/jupyter_contrib_nbextensions/nbextensions```

Добавить свое расширение в папку nbextensions
```sh 
git clone https://github.com/lifest01/postMessage-jupyter-extension.git
```
Итоговое расположение нашего расширения
```/Users/username/anaconda3/envs/jupyterexperiments/lib/python3.7/site-packages/jupyter_contrib_nbextensions/nbextensions/postMessage-jupyter-extension```
### 2. Установить и включить расширение
```sh
jupyter nbextension install postMessage-jupyter-extension
jupyter nbextension enable postMessage-jupyter-extension/main
```
---
## 3. Настройка jupyter для взаимодействия с iframe
Необходимо настройкть `jupyter_notebook_config.py` в папке Jupyter. Папка Jupyter находится в вашем домашнем каталоге, `~/.jupyter`.
Если файла конфигурации нет то можно его сгенерировать с значениями по умолчанию
```sh 
jupyter notebook --generate-config
```
В файл ```jupyter_notebook_config.py``` добавить заголовки для работы с iframe.
```sh
c.NotebookApp.tornado_settings = {
    'headers': {
        "Content-Security-Policy": "frame-ancestors 'self' http://localhost:5005",
        "Access-Control-Allow-Origin": "http://locahost:5005",
  }
}
```
    
