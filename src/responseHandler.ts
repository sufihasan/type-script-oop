
// project Api response handle

//step-1 Api response interface with generics
interface ApiResponse<T> {
    statusType: number;
    message: string;
    data: T;
}

// step-2 write a function to fetch api
function handleApiResponse<T>(response: ApiResponse<T>): T {  // handleApiResponse<T extends object>
    if (response.statusType === 200) {
        console.log('success', response.message);
        return response.data;
    }
    else {
        throw new Error('something went wrong bad api request')

    }
}

const userRes = handleApiResponse<{ name: string, age: number }>({
    statusType: 200,
    message: 'user fetch succesfully',
    data: {
        name: 'Hasan',
        age: 120
    }

})

const userRes1 = handleApiResponse<string>({
    statusType: 200,
    message: 'user fetch succesfully 2',
    data: 'ok good day'

})


// for a product
const productRes = handleApiResponse<string[]>({
    statusType: 200,
    message: 'product fess successfully done',
    data: ['product 1', "365", '4.95']
})