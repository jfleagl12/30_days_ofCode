
long long power(int a,int b){
    if(!b)return 1;
    if(b==1)return a;
    else{
        long long tmp = 1;
        for(int i = 1; i <= b; i++){
            tmp*=a;
        }
        return tmp;
    }
}

int main() {

    int T,a,b,N;

    cin >> T;
    for(int t = 0; t < T; t++){
        cin >> a >> b >> N;
        long long p = 0;
        p += a+b;
        for(int i = 1; i <= N; i++){
            cout << p << " ";
            p += (power(2,i)*b);
        }
        cout << endl;
    }
    return 0;
}
