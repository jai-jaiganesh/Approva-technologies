
#include <iostream>
using namespace std;
int maxXor(int l, int r,int k) {
    int a=0;
    for (int i=l;i<=r;i++)
    {
        for (int j=i;j<=r;j++)
        {
        a=max(a,(i^j));
        }
    }
       if(a<=k){
        return a;
       }

}
int main() {
    int res;
    int _lo;
    cin >> _lo;
    
    int _hi;
    cin >> _hi;
    int k;
    cin>>k;
    res = maxXor(_lo, _hi,k);
    cout << res;
    return 0;
}


