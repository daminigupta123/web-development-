import math

r = 42
angle_deg = 60

theta = math.radians(angle_deg)     
arc_length = r * theta               
side = arc_length / 4                
area = side ** 2

print(f"Arc length = {arc_length:.6f}")
print(f"Square side = {side:.6f}")
print(f"Area = {area:.6f}")         
print("Exact area (symbolic) = 49π² / 4")