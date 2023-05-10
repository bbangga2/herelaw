from flask import Flask, render_template, request, jsonify, url_for
from db import db_inint
from db import db_insert
import pymysql as my
import json
import boto3

# # s3 연결하기 위한 처리(만약 로컬 처리면 키값 넣어야한다.)
# s3 = boto3.resource('s3')
# s3_client = boto3.client('s3')

# # 버킷 리스트 획득
# def test_001():
#     bks = [ bk.name for bk in s3.buckets.all() ]
#     #print(bks)
#     return bks



app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')



@app.route('/submit-survey', methods=['POST'])
def submit_survey():

    filename=None
    if 'image' in request.files:
        file = request.files['image']
        file.save('uploads/' + file.filename)
        filename = file.filename
        print(filename)

    data = json.loads(request.form['location'])  # json 데이터와 파일을 함께 처리하려면 request.form으로 받아서 json화 되어있는 location 로드하기
    print(data) # [{'questionId': 1, 'answer': '자동차와 자동차'}, {'questionId': 12, 'answer': '직선도로'}, .....
    json_data = json.dumps(data, ensure_ascii=False)

    # data값 뽑아내기
    answer = []
    for item in data:
        answer.append(item['answer'])

    # json으로 받은것을 Query형태로 바꾸기
    msg = f'{answer[0]} 사고가 발생하였고, {answer[1]}에서 사고가 났으며, 사고의 종류는 {answer[2]}이고, 자동차 A는 {answer[3]} 진행하였고, 자동차 B는 {answer[4]} 로 진행하였으므로 과실 비율은 {answer[5]} 입니다.'
    response = {'message': msg}  
    print(response)  # 결과 : 'message': '교통사고가 발생한 장소는 고속도로, 횡단보도, 집앞입니다.'}

    # json과 Query를 db에 쏘기
    if all((json_data, msg, filename)):
        print("디비왔다")
        db_insert(json_data, msg, filename)

    return '' 

# @app.route('/datashoot', methods=['POST'])
# def datashoot():
    
#     # 업로드 이미지 데이터 받아서 저장하기
#     filename=None
#     if 'image' in request.files:
#         file = request.files['image']
#         file.save('uploads/' + file.filename)
#         filename = file.filename
#         print(filename)

#         # #s3에 업로드
#         # def test_003(bks):
#         #     for bk in bks:
#         #         if bk == 'ai-project4-taehyuk': # 훗날 버킷 이름
#         #             s3_client.upload_file(f'uploads/{filename}',bk, f'data/{filename}') # 마지막 f'data/{filename}'는 aws상 올릴곳

#         # bks = test_001()
#         # # 파일업로드
#         # test_003(bks)

        
#     # json 데이터 받기
#     data = json.loads(request.form['location'])  # json 데이터와 파일을 함께 처리하려면 request.form으로 받아서 json화 되어있는 location 로드하기
#     print(data) # [{'name': 'location', 'value': '고속도로'}, {'name': 'location', 'value': '횡단보도'}, {'name': 'location', 'value': '집앞'}]
#     json_data = json.dumps(data, ensure_ascii=False)
#     locations = [item['value'] for item in data if item['name'] == 'location'] # 프론트에서 작성한 form안에 name과 value있었는데 그거통해서
    

#     # json으로 받은것을 Query형태로 바꾸기
#     msg = "교통사고가 발생한 장소는 " + ", ".join(locations) + "입니다."
#     response = {'message': msg}  
#     print(response)  # 결과 : 'message': '교통사고가 발생한 장소는 고속도로, 횡단보도, 집앞입니다.'}

    
#     # json과 Query를 db에 쏘기
#     if all((json_data, msg, filename)):
#         print("디비왔다")
#         db_insert(json_data, msg, filename)

#     # 이미지는 s3로 쏘기


#     return '' # jsonify(response) # 리턴을 해줄 필요가 없다.


if __name__ == '__main__':
    app.run(debug=True)
    db_inint()