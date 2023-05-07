from flask import render_template, request
from flask import Flask as _Flask, jsonify
from flask.json import JSONEncoder as _JSONEncoder
import decimal

#自定义 Python 对象的序列化行为，以适应不同的数据类型和需求
class JSONEncoder(_JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            return float(o)
        super(_JSONEncoder, self).default(o)

#定义了一个基于 Flask 框架的应用程序 app
class Flask(_Flask):
    json_encoder = JSONEncoder


app = Flask(__name__)

#路由指的是Web应用程序的 URL，视图函数是 Flask 应用程序返回给客户端的内容
@app.route('/')
def main():
    return render_template("main.html")

@app.route('/c2')
def get_c2_data():
    res = []
    with open("map.txt",encoding='utf-8') as f:
        lines = f.readlines()
        for line in lines:
            line = line.replace("\n", "")
            res.append({"name": line.split(",")[0], "value": int(line.split(",")[1])})
    print(f"地图:{res}")
    return jsonify({"data": res})

@app.route('/l1')
def get_l1_data():
    res = []
    res.append({"name": "小于4.0分", "value": 306})
    res.append({"name": "4.0~4.5分", "value": 504})
    res.append({"name": "大于4.5分", "value": 189})
    return jsonify({"data": res})


@app.route('/l2')
def get_l2_data():
    city = request.args.get("city")
    print(f"{city}---------------------")
    if city == 'cq':
        city_name = "重庆"
        name = ["茶百道", "蜜雪冰城", "书亦烧仙草", "豆吉汤圆奶茶", "CoCo都可", "兵立王鲜果茶·奶茶"]
        num = [77, 54, 47, 47, 34, 29]
        max_num = [max(num) for i in range(len(num))]
        return jsonify({"name": name, "num": num, "max_num": max_num, "city_name": city_name})
    elif city == 'cd':
        city_name = "成都"
        name = ["茶百道", "兵立王鲜果茶·奶茶", "书亦烧仙草", "蜜雪冰城", "CHAGEE霸王茶姬", "CoCo都可"]
        num = [176, 125, 94, 88, 45, 39]
        max_num = [max(num) for i in range(len(num))]
        return jsonify({"name": name, "num": num, "max_num": max_num, "city_name": city_name})
    elif city == 'qd':
        city_name = "青岛"
        name = ["沪上阿姨鲜果茶", "CoCo都可", "茶百道", "蜜雪冰城", "阿水大杯茶", "CHAGEE霸王茶姬"]
        num = [9, 6, 4, 4, 4, 3]
        max_num = [max(num) for i in range(len(num))]
        return jsonify({"name": name, "num": num, "max_num": max_num, "city_name": city_name})
    elif city == 'sh':
        city_name = "上海"
        name = ["茶百道", "CoCo都可", "蜜雪冰城", "喜茶", "桂桂茶", "悸动烧仙草"]
        num = [151, 139, 77, 54, 48, 34]
        max_num = [max(num) for i in range(len(num))]
        return jsonify({"name": name, "num": num, "max_num": max_num, "city_name": city_name})
    elif city == 'xa':
        city_name = "西安"
        name = ["蜜雪冰城", "茶话弄", "书亦烧仙草", "茶百道", "CoCo都可", "奈雪的茶"]
        num = [132, 93, 67, 56, 52, 39]
        max_num = [max(num) for i in range(len(num))]
        return jsonify({"name": name, "num": num, "max_num": max_num, "city_name": city_name})
    elif city == 'xj':
        city_name = "新疆"
        name = ["蜜雪冰城", "茶百道", "吾饮良品水果茶", "R&B TEA", "沪上阿姨鲜果茶", "泰nice泰式手标奶咖"]
        num = [29, 28, 20, 12, 10, 9]
        max_num = [max(num) for i in range(len(num))]
        return jsonify({"name": name, "num": num, "max_num": max_num, "city_name": city_name})


@app.route('/r1')
def get_r1_data():
    city = ["蜜雪冰城", "瑞幸咖啡", "古茗", "书亦烧仙草", "茶百道", "星巴克", "沪上阿姨"]
    confirm = [22011, 9383, 7590, 6808, 6657, 6312, 5963]

    print(city, confirm)
    return jsonify({"city": city, "confirm": confirm})


@app.route('/r2')
def get_r2_data():
    res = []
    res.append({"name": "书亦烧仙草", "value": 42390})
    res.append({"name": "CoCo都可", "value": 40883})
    res.append({"name": "华言豆腐鲜奶茶", "value": 25080})
    res.append({"name": "蜜雪冰城", "value": 13933})
    res.append({"name": "一只酸奶牛", "value": 11416})
    res.append({"name": "茶百道", "value": 10489})
    return jsonify({"data": res})


if __name__ == '__main__':
    app.run(port=5000, debug=True)
