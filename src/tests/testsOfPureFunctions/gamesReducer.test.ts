import {gameType, mainType} from '../../types/types';
import {gamesReducer, setGames} from '../../store/reducers/gamesReudcer';
const initialState: mainType = {
    games: {
        'count': null,
        'next': null,
        'previous': null,
        'results': [],
        'seo_title': null,
        'seo_description': null,
        'seo_keywords': null,
        'seo_h1': null,
        'noindex': false,
        'nofollow': false,
        'description': null,
        'filters': {
            'years': []
        },
        'nofollow_collections': [
            'stores'
        ],
    },
    filteredGames: [],
    searchedGames:[],
    singleGame:{} as gameType
}

test('set games', () => {
    const state = {
            "count": 714191,
            "next": "https://api.rawg.io/api/games?key=34f4bc399f394d87a8595769b1ef97ee&page=2",
            "previous": null,
            "results": [],
            "seo_title": "All Games",
            "seo_description": "",
            "seo_keywords": "",
            "seo_h1": "All Games",
            "noindex": false,
            "nofollow": false,
            "description": "",
            "filters": {
                "years": []
            },
            "nofollow_collections": [
                "stores"
            ]
    }
    let newState = gamesReducer(initialState, setGames({data: state}))
    expect(newState.games.count).toBeGreaterThanOrEqual(714191)
})
