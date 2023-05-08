from flask import Flask, render_template, request, jsonify, url_for
from db import db_inint
from db import db_insert
import pymysql as my
import json


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/datashoot', methods=['POST'])
def datashoot():
    
    # print(request.files)
    # filename=None
    # if 'image' in request.files:
    #     file = request.files['image']
    #     file.save('uploads/' + file.filename)
    #     filename = file.filename
    #     print(filename)
        
    
    data = request.get_json() # 클라이언트에서 ajax로 json으로 보내준거(일단 여기서는 체크한 내용) 여기서 받기
    print(data) # {'location': [{'name': 'location', 'value': '고속도로'}, {'name': 'location', 'value': '횡단보도'}, {'name': 'location', 'value': '집앞'}], 'image': {}}
    json_data = json.dumps(data)
    locations = [item['value'] for item in data['location'] if item['name'] == 'location'] # 프론트에서 작성한 form안에 name과 value있었는데 그거통해서
    

    # json으로 받은것을 Query형태로 바꾸기
    msg = "교통사고가 발생한 장소는 " + ", ".join(locations) + "입니다."
    response = {'message': msg}  
    print(response)  # 결과 : 'message': '교통사고가 발생한 장소는 고속도로, 횡단보도, 집앞입니다.'}

    
    
    # json과 Query를 db에 쏘기
    # if all((json_data, msg, filename)):
    #     print("디비왔다")
    #     db_insert(json_data, msg, filename)

    # 이미지는 s3로 쏘기


    return '' # jsonify(response) # 리턴을 해줄 필요가 없다.


# @app.route('/upload', methods=['POST'])
# def upload():
#     if 'image' in request.files:
#         file = request.files['image']
#         file.save('uploads/' + file.filename)
#         print(file.filename)
#         return ''  # return 'file uploaded successfully'
#     else:
#         return '' # return 'no file uploaded'


if __name__ == '__main__':
    app.run(debug=True)
    db_inint()