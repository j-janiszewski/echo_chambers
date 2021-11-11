import numpy as np


def check_integration(position1, position2, latitude, sharpness):
    dist = np.linalg.norm(position1 - position2)
    probability = latitude ** sharpness / (dist ** sharpness + latitude ** sharpness)
    if np.random.rand() <= probability:
        return True
    else:
        return False
