import pymysql as my

# 지금은 우선 localdb로 처리하고 나중에 AWS RDS쓰기 또는 db 컨테이너 말아서 
def db_inint():
    # mysql -u root -p
    # password:
    try:
        connection = my.connect(host            ='localhost',     # 여기에 db 컨테이너 명
                                    user        ='root',     
                                    password    ='12341234',
                                    charset     ='utf8'
                                    )
    # mysql[None]:>
        with connection: # 커넥션은 with문을 나가면 자동으로 닫힌다
            with connection.cursor() as cur:  # 커서는 with문을 나가면 자동으로 닫힌다.
                # 1. 데이터베이스 생성
                cur.execute('create database if not EXISTS hl_db;')
                # 2. 커밋 -> 데이터베이스(물리적)에 변동을 가하면(db생성, 테이블 생성, 데이터입력/수정/삭제)
                connection.commit()
                # 3. 데이터베이스 사용 지정
                cur.execute('use hl_db;')
                # mysql[ml_db]:>
                # 4. 테이블 생성
                cur.execute('''
                    CREATE TABLE accidents (
                        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                        json_data JSON NOT NULL,
                        query_message VARCHAR(255) NOT NULL,
                        image_name VARCHAR(255) NOT NULL,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                        );
                ''')
                # 5. 커밋
                connection.commit()

    except Exception as e:
        print('접속 오류', e)


def db_insert( json_data,query_message,image_name ):
    try:
        # 커넥션
        connection = my.connect(host            ='localhost',    
                                    user        ='root',     
                                    password    ='12341234',
                                    database    ='hl_db',
                                    charset     ='utf8',
                                    cursorclass =my.cursors.DictCursor
                                    )
        # mysql[None]:>
        with connection: # 커넥션은 with문을 나가면 자동으로 닫힌다
            with connection.cursor() as cur:
                sql = '''
                insert into accidents (json_data,query_message,image_name) VALUES (%s,%s,%s);
            ''' 
                cur.execute(sql,(json_data,query_message,image_name))                                
                # 커밋
                connection.commit()
    except Exception as e:
        print(e)