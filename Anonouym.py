from pymongo import MongoClient
from flask import Flask, render_template , request, jsonify
client = MongoClient('mongodb+srv://Anonymousweb:iHNdodmgWyVxghW3@cluster0.ubj30ye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
db = client.project


app = Flask(__name__)  

@app.route('/')
def home():
   return render_template('index.html')


@app.route("/posts", methods=["POST"])
def passage_post():
    url_receive = request.form['url_give']
    head_receive = request.form['head_give']
    category_receive = request.form['category_give']
    para_receive = request.form['para_give']
    
    doc = {
        'image': url_receive,          
        'title': head_receive,        
        'description': para_receive,  
        'category': category_receive  
        }
    check=db.posts.insert_one(doc)
    if(check):
       print("REceived")      
    return jsonify({'msg': 'complete!'})
 
@app.route("/posts", methods=["GET"])
def mars_get():
   all_posts = list(db.posts.find({},{'_id':False}))
   return jsonify({'posts':all_posts})


if __name__ == '__main__':  
   app.run('0.0.0.0',port=5000,debug=True)
