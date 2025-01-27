const initialGlobalSate = {
    images: [
        {
            name: 'Bark-01',
            imageURL: 'https://naturesketch.oss-cn-hangzhou.aliyuncs.com/image/tree-01.png',
        },
        {
            name: 'Flower-01',
            imageURL: 'https://naturesketch.oss-cn-hangzhou.aliyuncs.com/image/flower-01.png',
        },
        {
            name: 'Leaf-01',
            imageURL: 'https://naturesketch.oss-cn-hangzhou.aliyuncs.com/image/leaf-01.png',
        },
        {
            name: 'Flower-02',
            imageURL: 'https://naturesketch.oss-cn-hangzhou.aliyuncs.com/image/flower-02.jpg',
        },
    ],
    audios: [
        {
            name: 'Water-01',
            idImage: 'https://naturesketch.oss-cn-hangzhou.aliyuncs.com/audio/water-svg.svg',
            audioURL: 'https://naturesketch.oss-cn-hangzhou.aliyuncs.com/audio/water-01.mp3',
        },
        {
            name: 'Wind-01',
            idImage: 'https://naturesketch.oss-cn-hangzhou.aliyuncs.com/audio/wind-svg.svg',
            audioURL: 'https://naturesketch.oss-cn-hangzhou.aliyuncs.com/audio/wind-01.mp3',
        },
        {
            name: 'Rain-01',
            idImage: 'https://naturesketch.oss-cn-hangzhou.aliyuncs.com/audio/rain-svg.svg',
            audioURL: 'https://naturesketch.oss-cn-hangzhou.aliyuncs.com/audio/rain-01.mp3',
        },
        {
            name: 'Cicada-01',
            idImage: 'https://naturesketch.oss-cn-hangzhou.aliyuncs.com/audio/insect-svg.svg',
            audioURL: 'https://naturesketch.oss-cn-hangzhou.aliyuncs.com/audio/cicada-01.mp3',
        },
    ],
    videos: [
        {
            name: 'Flower-01',
            videoURL: 'https://naturesketch.oss-cn-hangzhou.aliyuncs.com/video/Flower-01.mp4',
        },
        // {
        //     name: 'Grass-01',
        //     videoURL: 'https://naturesketch.oss-cn-hangzhou.aliyuncs.com/video/Grass-01.mp4',
        // },
        {
            name: 'Rain-01',
            videoURL: 'https://naturesketch.oss-cn-hangzhou.aliyuncs.com/video/Rain-01.mp4',
        },
        {
            name: 'Sky-01',
            videoURL: 'https://naturesketch.oss-cn-hangzhou.aliyuncs.com/video/Sky-01.mp4',
        },
    ],
    currentTexture: {
        type: -1,
        name: '',
        url: '',
    },
    isSaved: false,
    shapePoints: [],
    shapeHasDrawed: [],
    shapeIndex: [],
    rangeRects: [],
    savedCanvas: null,
    shapeTextureInfo: [],
    timeIndexRef: [],
    timeRef: [],
    imageTexture: [],
    texturesRef: [],
    videoTexture: [],
    videosRef: [],
    timeIndex: [],
    audiosArr: []
}

export const selectCurrentTexture = (data) => ({
    type: 'SELECT_CURRENT_TEXTURE',
    payload: data    
})

export const addAudioData = (data) => ({
    type: 'ADD_AUDIO_DATA',
    payload: data 
})

export const addVideoData = (data) => ({
    type: 'ADD_VIDEO_DATA',
    payload: data 
})

export const addImageData = (data) => ({
    type: 'ADD_IMAGE_DATA',
    payload: data 
})

export const saveCanvasData = (data) => ({
    type: 'SAVE_CANVAS_DATA',
    payload: data,
})

export const changeIsSaved = (data) => ({
    type: 'CHANGE_IS_SAVED',
    payload: data,
})

const globalReducer = (state = initialGlobalSate, action) => {
    switch(action.type) {
        case 'SELECT_CURRENT_TEXTURE':
            return {
                ...state,
                currentTexture: action.payload
            }
        case 'ADD_AUDIO_DATA':
            const newAudioData = JSON.parse(JSON.stringify(state.audios));
            newAudioData.push(action.payload);
            return {
                ...state,
                audios: newAudioData
            }
        case 'ADD_VIDEO_DATA':
            const newVideoData = JSON.parse(JSON.stringify(state.videos));
            newVideoData.push(action.payload);
            return {
                ...state,
                videos: newVideoData
            }
        case 'ADD_IMAGE_DATA':
            const newImageData = JSON.parse(JSON.stringify(state.images));
            newImageData.push(action.payload);
            return {
                ...state,
                images: newImageData
            }
        case 'SAVE_CANVAS_DATA':
            return {
                ...state,
                shapePoints: action.payload.shapePoints,
                shapeHasDrawed: action.payload.shapeHasDrawed,
                shapeIndex: action.payload.shapeIndex,
                rangeRects: action.payload.rangeRects,
                savedCanvas: action.payload.savedCanvas,
                shapeTextureInfo: action.payload.shapeTextureInfo,
                // timeIndexRef: action.payload.timeIndexRef,
                // timeRef: action.payload.timeRef,
                imageTexture: action.payload.imageTexture,
                // texturesRef: action.payload.texturesRef,
                videoTexture: action.payload.videoTexture,
                // videosRef: action.payload.videosRef,
                timeIndex: action.payload.timeIndex,
                audiosArr: action.payload.audiosArr,
            }
        case 'CHANGE_IS_SAVED':
            return {
                ...state,
                isSaved: action.payload,
            }
        default:
            return state;
    }
}

export default globalReducer;
