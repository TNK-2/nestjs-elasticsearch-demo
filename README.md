# elasticsearch-kibana

以下のコマンドでelasticsearchとkibanaが立ち上がる
```
docker-compose up -d
```

立ち上がったら 、、 

## elastic search へのアクセス
http://localhost:9200/   

## kibana へのアクセス
http://localhost:5601/

## 参考URL

https://medium.com/eureka-engineering/%E5%9F%BA%E7%A4%8E%E7%B7%A8-elasticsearch%E3%81%AE%E6%A4%9C%E7%B4%A2%E3%82%AF%E3%82%A8%E3%83%AA%E3%82%92%E4%BD%BF%E3%81%84%E3%81%93%E3%81%AA%E3%81%9D%E3%81%86-ace3e18c2174

https://dev.classmethod.jp/articles/elasticsearch-getting-started-07/

https://dev.classmethod.jp/articles/elasticsearch-getting-started-08/

## コマンドメモ

リソース作成・変更
```
curl -XPUT "http://localhost:9200/customer/external/1" \
-H "Content-Type: application/json" \
-d '{
  "query": {
    "terms": {
      "name": "taro", "cook_time_min": [10, 15, 20]
    }
  }
}'
```

```
# リソース作成にあたってURLのID指定がない場合は自動でIDが割り当てられる
curl -XPOST "http://localhost:9200/customer/external" \
-H "Content-Type: application/json" \
-d '{
  "query": {
    "terms": {
      "name": "taro3", "cook_time_min": [10, 15, 20]
    }
  }
}'
```

```
curl -XPOST "http://localhost:9200/test/recipes/2" \
-H "Content-Type: application/json" \
-d @./data/recipes/basil-and-pesto-hummus.json
```

リソース削除

```
curl -XDELETE "http://localhost:9200/customer/external/2"
```

## バッチプロセッシング

```
curl -XPOST "http://localhost:9200/customer/external/_bulk" \
-H "Content-Type: application/json" \
-d '
{"index":{"_id":"1"}}
{"name": "John Doe" }
{"index":{"_id":"2"}}
{"name": "Jane Doe2" }
{"index":{"_id":"3"}}
{"name": "Jane Doe3" }
'
```

```
curl -XPOST "http://localhost:9200/customer/external/_bulk" \
-H "Content-Type: application/json" \
-d '
{"update":{"_id":"1"}}
{"doc": {"name": "John Doe becomes Jane Doe"}}
{"delete":{"_id":"2"}}
'
```

## 検索 

データ挿入

```
curl -XPOST 'localhost:9200/classmethod/employees/_bulk?pretty' \
-H "Content-Type: application/json" \
--data-binary "@./data/employees/employees.jsonl"

curl 'localhost:9200/_cat/indices?v&index=classmethod'
```

全件
```
curl 'localhost:9200/classmethod/employees/_search' \
-H "Content-Type: application/json" \
-d '
{
    "_source": {
        "exclude": ["joined_date", "friends"]
    },
    "query": {
        "match_all": {}
    }
}
'
```

ページング
```
# size : 件数
# from : (先頭から)スキップする件数
curl 'localhost:9200/classmethod/employees/_search' \
-H "Content-Type: application/json" \
-d '
{
    "query": {
        "match_all": {}
    },
    "size": 10,
    "from": 0
}
'
```

フィルタリング

```
curl 'localhost:9200/classmethod/employees/_search' \
-H "Content-Type: application/json" \
-d '
{
    "_source": {
        "include": ["employee_id", "firstname"]
    },
    "query": {
        "match" : {
            "firstname": "tammy"
        }
    }
}
'
```