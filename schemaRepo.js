exports.createPet = 
    {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Generated schema for Root",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "category": {
            "type": "object",
            "properties": {
              "id": {
                "type": "number"
              },
              "name": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "name"
            ]
          },
          "name": {
            "type": "string"
          },
          "photoUrls": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "tags": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "number"
                },
                "name": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "name"
              ]
            }
          },
          "status": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "category",
          "name",
          "photoUrls",
          "tags",
          "status"
        ]
      }