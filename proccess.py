import tensorflow as tf
from tensorflow.keras.applications.vgg16 import VGG16, preprocess_input, decode_predictions
from tensorflow.keras.preprocessing import image
import numpy as np

def classify():
    # Load the pre-trained VGG16 model
    model = VGG16(weights='imagenet')

    # Load and preprocess the input image
    img_path = 'image.jpg'
    img = image.load_img(img_path, target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)

    # Use the pre-trained model to make predictions
    preds = model.predict(x)

    # Decode the predictions into a list of tuples (class, description, probability)
    return decode_predictions(preds, top=5)[0]

    
